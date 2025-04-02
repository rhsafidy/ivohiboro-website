'use client';

import { SessionProvider } from 'next-auth/react';
import { AdminLayout } from 'src/app/_layout/layout';
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

const breadcrumbs = [{ label: 'News', href: '#', showOnMobile: false }];

const mockBlogPosts = [
  {
    id: '1',
    title: 'Breaking News: AI Revolution',
    tag: 'Technology',
    writer: 'John Doe',
    text: 'Artificial Intelligence is transforming the world as we know it...',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    title: 'Health Tips for 2025',
    tag: 'Health',
    writer: 'Jane Smith',
    text: 'Discover the top health tips to stay fit and healthy in 2025...',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: '3',
    title: 'Travel Destinations You Must Visit',
    tag: 'Travel',
    writer: 'Alice Johnson',
    text: 'Explore the most breathtaking travel destinations for your next vacation...',
    image: 'https://via.placeholder.com/150',
  },
];

const Page = () => {
  const [blogPosts, setBlogPosts] = useState(mockBlogPosts);

  const handleDelete = (id: string) => {
    setBlogPosts(blogPosts.filter((post) => post.id !== id));
  };

  return (
    <SessionProvider>
      <AdminLayout breadcrumbs={breadcrumbs}>
        <div className="space-y-4 space-x-4 grid grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex items-start p-4 space-x-4 border rounded-md shadow-sm"
            >
              {/* <Image
                src={'/images/metrics-image.png'}
                width={100}
                height={100}
                alt="home"
              ></Image> */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Tag:</span> {post.tag} |{' '}
                  <span className="font-medium">Writer:</span> {post.writer}
                </p>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {post.text}
                </p>
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
      </AdminLayout>
    </SessionProvider>
  );
};

export default Page;
