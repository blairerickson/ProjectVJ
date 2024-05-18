import connectDB from '@/config/connect-DB';
import { Message } from '@/lib/types/assistant-response.types';
import userModel from '@/models/user-model';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await connectDB();

  try {
    console.log('🖥️ LOGS: POST /api/register request received.');
    const data: Message = await req.json();

    if (
      !data.message?.functionCall?.parameters.name ||
      !data.message?.functionCall?.parameters.phone_number ||
      !data.message?.functionCall?.parameters.interests
    ) {
      console.log(
        '🖥️ LOGS: Registration failed. Please provide all required fields.'
      );
      return NextResponse.json({
        error: 'Registration failed. Please provide all required fields.',
      });
    }

    // check if user already exists
    const userExists = await userModel.findOne({
      name: data.message.functionCall.parameters.name,
    });

    if (userExists) {
      console.log('🖥️ LOGS: Registration failed. User already exists.');
      return NextResponse.json({
        error: 'Registration failed. User already exists.',
      });
    }

    const user = new userModel(data.message.functionCall.parameters);
    await user.save();

    console.log(
      '🖥️ LOGS: Registration successful. Thank you for registering! 🎉'
    );
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
