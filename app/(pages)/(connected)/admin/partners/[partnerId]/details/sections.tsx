'use client';

import { getOnePartnerDetailsSections } from '@/app/actions/partners/get-partner-details-sections';
import { PartnerDetailsSection } from '@prisma/client';
import { useEffect, useState } from 'react';

interface Props {
  partnerId: string;
}

export const PartnerDetailsSections = ({ partnerId }: Props) => {
  const [partnerDetailsSection, setPartnerDetailsSection] = useState<
    PartnerDetailsSection[]
  >([]);

  useEffect(() => {
    const fetchPartnerDetailsSections = async () => {
      const res = await getOnePartnerDetailsSections(partnerId);
      if (res.status === 200 && res.partner)
        setPartnerDetailsSection(res.partner);
    };

    fetchPartnerDetailsSections();
  }, []);

  return <></>;
};
