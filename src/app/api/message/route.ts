import connectDB from '@/config/connect-DB';
import { envConfig } from '@/config/env.config';
import { Message } from '@/lib/types/assistant-response.types';
import userModel from '@/models/user-model';
import { NextResponse } from 'next/server';

const accountSid = envConfig.twilio.accountSid;
const authToken = envConfig.twilio.authToken;

const client = require('twilio')(accountSid, authToken);

export async function POST(req: Request) {
  await connectDB();

  try {
    const data: Message = await req.json();

    if (data.message.type == 'function-call') {
      const user = await userModel.findOne({
        name: data.message.functionCall.parameters.receiverName,
      });

      if (!user) {
        console.log('LOGS: User not found. Your message cannot be delivered.');
        return NextResponse.json({
          error: 'Your message cannot be delivered. User not found.',
        });
      }

      client.messages
        .create({
          body: data.message.functionCall.parameters.message,
          from: 'whatsapp:+14155238886',
          to: `whatsapp:${user.phone_number}`,
        })
        .then((message: any) => console.log(message.sid));
    }
    // const user = new userModel(data);
    // await user.save();

    console.log('LOGS: Your message has been sent.');
    return NextResponse.json({ result: 'Your message has been sent.' });
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
