import { Article } from '@prisma/client';
('use client');

import { SessionProvider } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import Image from 'next/image';
export const NewsList = ({ data }: { data: Article[] }) => {
  const handleDelete = (postId: string) => {};

  return (
    <div className="space-y-4 space-x-4 grid grid-cols-3">
      {data.map((post) => (
        <div
          key={post.id}
          className="flex items-start p-4 space-x-4 border rounded-md shadow-sm"
        >
          <Image
            src={'/images/metrics-image.png'}
            width={100}
            height={100}
            alt="home"
          ></Image>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-500">
              <span className="font-medium">Tag:</span> {post.tag} |{' '}
              <span className="font-medium">Writer:</span> {post.authorId}
            </p>
            <p className="text-sm text-gray-700 line-clamp-2">{post.summary}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => alert(`Edit ${post.title}`)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-500"
                onClick={() => handleDelete(post.id)}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  );
};
