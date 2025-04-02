import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// import { auth } from '@clerk/nextjs';

export async function GET() {
  try {
    // const { userId } = auth();
    // if (!userId) return new NextResponse('Unauthorized', { status: 401 });

    const partners = await prisma.partner.findMany();
    return NextResponse.json(partners);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}

// export async function POST(req: Request) {
//   try {
//     // const { userId } = auth();
//     // if (!userId) return new NextResponse('Unauthorized', { status: 401 });

//     const body = await req.json();
//     const { name, description, website, logo } = body;

//     if (!name) return new NextResponse('Name is required', { status: 400 });

//     const partner = await prisma.partner.create({
//       data: { name, description, website, logo },
//     });

//     return NextResponse.json(partner);
//   } catch (error) {
//     return new NextResponse('Internal Error', { status: 500 });
//   }
// }
