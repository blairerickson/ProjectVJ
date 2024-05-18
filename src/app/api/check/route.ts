import connectDB from '@/config/connect-DB';
import { Message } from '@/lib/types/assistant-response.types';
import tempModel from '@/models/temp-model';
import userModel from '@/models/user-model';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await connectDB();

  try {
    const data: Message = await req.json();

    if (!data.message?.functionCall?.parameters.name) {
      console.log(
        'LOGS: Name not provided. Please provide all required fields.'
      );
      return NextResponse.json({
        error: 'Please provide all required fields.',
      });
    }

    // check if user already exists
    const userExists = await userModel.findOne({
      name: data.message.functionCall.parameters.name,
    });

    if (!userExists) {
      console.log('LOGS: User does not exist. Please register first.');
      return NextResponse.json({
        error: 'User does not exist. Please register first.',
      });
    }

    // save user to DB
    const user = await tempModel.create({
      callId: data.message.call.id,
      userId: userExists._id,
    });

    console.log('LOGS: User found.');
    return NextResponse.json({
      result: 'Success! User found.',
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
