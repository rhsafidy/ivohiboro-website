'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getOnePartner = async (id: string) => {
  try {
    const partner = await prisma.partner.findUnique({
      where: { id },
    });

    console.log(partner);

    if (!partner) {
      return { status: 404, message: 'Partner not found' };
    }

    return {
      status: 200,
      message: 'Partner successfully found',
      partner: partner,
    };
  } catch (error) {
    return { status: 500, message: 'Internal Server Error' };
  }
};
