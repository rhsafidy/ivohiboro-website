import { PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useRef, useState } from 'react';

export const useFileUpload = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [upldadProgress, setUploadProgress] = useState(0);
  const [uploadedSize, setUploadedSize] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleUpload = async (file: File) => {
    try {
      const newBlob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/images/upload',
        onUploadProgress: (progressEvent) => {
          setUploadProgress(progressEvent.percentage);
          setUploadedSize(progressEvent.total);
          if (progressEvent.percentage === 100) {
            setIsUploaded(true);
          }
        },
      });

      setBlob(newBlob);
      return newBlob;
    } catch (err) {
      setError('Failed to upload file');
      throw err;
    }
  };

  return {
    inputFileRef,
    blob,
    handleUpload,
    isUploaded,
    upldadProgress,
    uploadedSize,
    error,
  };
};
