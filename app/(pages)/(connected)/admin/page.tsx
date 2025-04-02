import { SessionProvider } from 'next-auth/react';
import { AdminLayout } from 'src/app/_layout/layout';

const breadcrumbs = [{ label: 'Dashboard', href: '#', showOnMobile: false }];

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
