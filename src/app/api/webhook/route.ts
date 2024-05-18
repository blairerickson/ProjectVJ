import connectDB from '@/config/connect-DB';
import tempModel from '@/models/temp-model';
import userModel from '@/models/user-model';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await connectDB();

  try {
    const data = await req.json();

    if (data.message.type === 'end-of-call-report') {
      const callId = data.message.call.id;
      const call = await tempModel.findOne({ callId });
      const user = await userModel.findById(call.userId);

      if (user) {
        user.messages.push(data.message.summary);
        await user.save();
        console.log('LOGS: Message saved');
      } else {
        console.log('LOGS: User not found');
      }
    }

    console.log('LOGS: Done ✅');
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
