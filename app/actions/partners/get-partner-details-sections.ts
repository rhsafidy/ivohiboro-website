'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getOnePartnerDetailsSections = async (id: string) => {
  try {
    const partner = await prisma.partnerDetailsSection.findMany({
      where: { partnerId: id },
    });

    console.log(partner);

    return { status: 200, message: 'Partner:', partner: partner };
  } catch (error) {
    return { status: 500, message: 'Internal Server Error' };
  }
};
