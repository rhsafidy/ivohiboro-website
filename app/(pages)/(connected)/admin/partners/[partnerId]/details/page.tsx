'use client';

import { SessionProvider } from 'next-auth/react';
import { AdminLayout } from 'src/app/_layout/layout';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getOnePartner } from '@/app/actions/partners/get-one-partner';
import { Partner } from '@prisma/client'; // Import du type Partner depuis Prisma

const breadcrumbs = [
  { label: 'Dashboard', href: '#', showOnMobile: false },
  { label: 'Partner management', href: '/admin/partners', showOnMobile: false },
  { label: 'Partner details', href: '#', showOnMobile: false },
];

const Page = () => {
  const { partnerId } = useParams();
  const [partner, setPartner] = useState<Partner | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartner = async () => {
      try {
        setLoading(true);
        const res = await getOnePartner(partnerId as string);

        console.log(res);
        if (res.status === 200 && res.partner) {
          setPartner(res.partner);
        } else {
          setError('Partner not found');
        }
      } catch (err) {
        setError('Failed to fetch partner');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPartner();
  }, [partnerId]);

  if (loading) {
    return (
      <SessionProvider>
        <AdminLayout breadcrumbs={breadcrumbs}>
          <div>Loading...</div>
        </AdminLayout>
      </SessionProvider>
    );
  }

  if (error) {
    return (
      <SessionProvider>
        <AdminLayout breadcrumbs={breadcrumbs}>
          <div className="text-red-500">{error}</div>
        </AdminLayout>
      </SessionProvider>
    );
  }

  if (!partner) {
    return (
      <SessionProvider>
        <AdminLayout breadcrumbs={breadcrumbs}>
          <div>No partner data available</div>
        </AdminLayout>
      </SessionProvider>
    );
  }

  return (
    <SessionProvider>
      <AdminLayout breadcrumbs={breadcrumbs}>
        <div className=" items-center w-full justify-center flex flex-col">
          <div className="flex items-center gap-4">
            {partner.logo && (
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-20 w-20 rounded-full object-cover border-2 border-gray-200"
              />
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{partner.name}</h1>
          </div>

          {partner.description && (
            <div className="mt-2">
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="mt-1">{partner.description}</p>
            </div>
          )}

          {partner.website && (
            <div className="mt-3 justify-center">
              <h2 className="text-lg font-semibold">Website</h2>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline inline-block mt-1"
              >
                {partner.website}
              </a>
            </div>
          )}

          <div className="text-sm text-gray-500 mt-3">
            <p>Created: {new Date(partner.createdAt).toLocaleDateString()}</p>
            <p>
              Last updated: {new Date(partner.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </AdminLayout>
    </SessionProvider>
  );
};

export default Page;
