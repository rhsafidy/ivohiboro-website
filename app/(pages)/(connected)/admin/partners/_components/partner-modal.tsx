'use client';

import { Partner } from '@prisma/client';
import { set, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPartner, updatePartner } from '../actions/partner';
import { toast } from 'sonner';
import { useFileUpload } from '@/hooks/vercel-client-upload';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  description: z.string().optional(),
  website: z.string().url().or(z.literal('')).optional(),
  logo: z.string().optional(),
});

export function PartnerModal({
  open,
  onOpenChange,
  onDataChanged,
  partner,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  partner?: Partner;
  onDataChanged: () => void;
}) {
  const router = useRouter();
  const {
    inputFileRef,
    blob,
    handleUpload,
    isUploaded,
    upldadProgress,
    uploadedSize,
  } = useFileUpload();
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: partner?.name || '',
      description: partner?.description || '',
      website: partner?.website || '',
      logo: partner?.logo || '',
    },
  });

  useEffect(() => {
    if (isUploaded === true) {
      setIsUploading(false);
    }
  }, [isUploaded]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      let logoUrl = partner?.logo || '';

      if (selectedFile) {
        setIsUploading(true);
        const newBlob = await handleUpload(selectedFile);
        logoUrl = newBlob?.url || logoUrl;
      }

      if (partner) {
        await updatePartner(partner.id, { ...values, logo: logoUrl });
        toast.success('Partner updated successfully');
      } else {
        await createPartner({ ...values, logo: logoUrl });
        toast.success('Partner created successfully');
      }

      router.refresh();
      onDataChanged();
      onOpenChange(false);
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsUploading(false);
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {partner ? 'Edit Partner' : 'Add New Partner'}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col items-center justify-center">
              <div className="mt-2 mb-3">
                {selectedFile ? (
                  <div className="relative group mt-4 overflow-hidden">
                    <Image
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected logo"
                      width={1000}
                      height={1000}
                      className="object-cover w-[100px] h-[100px] rounded-full aspect-square"
                    />
                  </div>
                ) : partner?.logo ? (
                  <div className="relative group mt-4 overflow-hidden">
                    <Image
                      src={partner.logo}
                      alt="Partner logo"
                      width={1000}
                      height={1000}
                      className="object-cover w-[100px] h-[100px] rounded-full aspect-square"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-sm text-gray-500">No logo</span>
                  </div>
                )}

                <input
                  type="file"
                  ref={inputFileRef}
                  className="hidden"
                  onChange={handleFileChange}
                />

                {isUploading && (
                  <>
                    <>{upldadProgress.toFixed(0)}%</>
                    <>{uploadedSize}</>
                    <Progress value={upldadProgress} className={`w-[100%]`} />
                  </>
                )}
              </div>
              <div>
                <Button
                  disabled={isUploading}
                  type="button"
                  onClick={() => inputFileRef.current?.click()}
                >
                  {selectedFile ? 'Change Logo' : 'Upload a new Logo'}
                </Button>
              </div>
            </div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Partner name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Partner description"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2">
              <Button
                disabled={isUploading}
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button disabled={isUploading} type="submit">
                {partner ? 'Update' : 'Create'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
