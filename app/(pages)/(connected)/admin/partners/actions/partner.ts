'use server';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();
// actions/partner.ts
export async function getPartners() {
  const partners = await prisma.partner.findMany();
  return partners; // Bien retourner les données
}

export async function createPartner(data: {
  name: string;
  description?: string;
  website?: string;
  logo?: string;
}) {
  //   const { userId } = auth();
  //   if (!userId) throw new Error('Unauthorized');

  await prisma.partner.create({ data });
  revalidatePath('/partners');
}

export async function updatePartner(
  id: string,
  data: {
    name: string;
    description?: string;
    website?: string;
    logo?: string;
  }
) {
  //   const { userId } = auth();
  //   if (!userId) throw new Error('Unauthorized');

  await prisma.partner.update({
    where: { id },
    data,
  });
  revalidatePath('/partners');
}

export async function deletePartner(id: string) {
  //   const { userId } = auth();
  //   if (!userId) throw new Error('Unauthorized');

  await prisma.partner.delete({ where: { id } });
  revalidatePath('/partners');
}
