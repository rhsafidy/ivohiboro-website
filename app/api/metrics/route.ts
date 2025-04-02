import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// import { auth } from '@clerk/nextjs';

export async function GET() {
  try {
    // const { userId } = auth();
    // if (!userId) return new NextResponse('Unauthorized', { status: 401 });

    const metrics = await prisma.metric.findMany();
    return NextResponse.json(metrics);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
