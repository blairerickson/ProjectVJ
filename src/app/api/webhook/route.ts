import connectDB from '@/config/connect-DB';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await connectDB();

  try {
    if (req.method !== 'POST') {
      return NextResponse.json({ error: 'Method Not Allowed' });
    }

    const data = await req.json();

    console.warn('DATA FROM VAPI:', data);

    return NextResponse.json({
      msg: 'Done ✅',
    });
  } catch (error) {
    console.error('Error processing POST request:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      {
        status: 500,
      }
    );
  }
}
