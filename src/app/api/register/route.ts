import connectDB from '@/config/connect-DB';
import { Message } from '@/lib/types/assistant-response.types';
import userModel from '@/models/user-model';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await connectDB();

  try {
    if (req.method !== 'POST') {
      return NextResponse.json({ error: 'Method Not Allowed' });
    }

    const data: Message = await req.json();

    if (
      !data.message?.functionCall?.parameters.name ||
      !data.message?.functionCall?.parameters.phone_number ||
      !data.message?.functionCall?.parameters.interests
    ) {
      return NextResponse.json({
        result: 'Registration failed. Please provide all required fields.',
      });
    }
    const user = new userModel(data.message.functionCall.parameters);
    await user.save();

    return NextResponse.json({
      result: 'Registration successful. Thank you for registering! 🎉',
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
