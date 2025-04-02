'use client';

import { SessionProvider } from 'next-auth/react';
import { AdminLayout } from '@/main/app/(pages)/(connected)/admin/_layout/layout';
import { useFileUpload } from '@/main/app/utils/upload/vercel-client-upload';

const breadcrumbs = [
  { label: 'Building Your Application', href: '#', showOnMobile: false },
  { label: 'Data Fetching', href: null, showOnMobile: true },
];

const Page = () => {
  const { inputFileRef, blob, handleUpload } = useFileUpload();
  return (
    <SessionProvider>
      <AdminLayout breadcrumbs={breadcrumbs}>
        <h1>Upload Your Avatar</h1>
        {/* <form onSubmit={handleUpload}>
          <input name="file" ref={inputFileRef} type="file" required />
          <button type="submit">Upload</button>
        </form> */}
        {blob && (
          <div>
            Blob url: <a href={blob.url}>{blob.url}</a>
          </div>
        )}
      </AdminLayout>
    </SessionProvider>
  );
};

export default Page;
