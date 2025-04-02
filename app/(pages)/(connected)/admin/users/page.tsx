import { SessionProvider } from 'next-auth/react';
import { AdminLayout } from 'src/app/_layout/layout';

const breadcrumbs = [
  { label: 'Building Your Application', href: '#', showOnMobile: false },
  { label: 'Data Fetching', href: null, showOnMobile: true }, // null href means it's the current page
];

const Page = () => {
  return (
    <SessionProvider>
      <AdminLayout breadcrumbs={breadcrumbs}>
        <></>
      </AdminLayout>
    </SessionProvider>
  );
};

export default Page;
