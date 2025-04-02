'use client';

import { useEffect, useState } from 'react';
import { AdminLayout } from 'src/app/_layout/layout';
import { getMetrics } from './actions/metric';
import { MetricTable } from './_components/list-metrics';
import { MetricModal } from './_components/metric-modal';
import { Metric } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { SessionProvider } from 'next-auth/react';

const breadcrumbs = [
  { label: 'Metrics', href: '#', showOnMobile: false },
  { label: 'Manage metrics', href: null, showOnMobile: true },
];

const Page = () => {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refresh, setRefresh] = useState(false);
  const [disableCreate, setDisableCreate] = useState(true);

  const handleUpdate = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('/api/metrics');

        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        if (data && data.length < 5) {
          setDisableCreate(false);
        }
        setMetrics(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, [refresh]);

  return (
    <SessionProvider>
      <AdminLayout breadcrumbs={breadcrumbs}>
        {disableCreate ? (
          <></>
        ) : (
          <>
            <Button className="mb-2" onClick={() => setIsOpen(true)}>
              Create a new metric
            </Button>
          </>
        )}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <MetricTable onDataUpdated={handleUpdate} data={metrics} />
        )}
        <MetricModal
          onDataUpdated={handleUpdate}
          open={isOpen}
          onOpenChange={setIsOpen}
        />
      </AdminLayout>
    </SessionProvider>
  );
};

export default Page;
