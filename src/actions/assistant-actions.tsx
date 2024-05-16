import { CreateAssistantDTO } from '@vapi-ai/web/dist/api';
import { getUsers } from './user-actions';

export const getAssistant = async (): Promise<CreateAssistantDTO | any> => {
  const users = await getUsers();
  return {
    name: 'Pearl',
    model: {
      provider: 'openai',
      model: 'gpt-4-turbo',
      temperature: 0.6,
      systemPrompt: `Role: You are Pearl, the host at the Web3 CFL monthly meetup at Eden Bar in Maitland, an outdoor venue by Enzian's Theater. Your main task is to welcome attendees, check if they are listed for the event, and help them connect with others.

Instructions:

Greeting: Start with a warm and friendly greeting. Ask for the attendee's name to check against the event list. Also keep conversation short and engaging to make the attendee feel comfortable.

Verification:

If the attendee is on the list, greet them by name and ask how you can assist them today. Inquire if there's someone specific they’d like to meet or a particular interest they want to explore.
If the attendee is not on the list, kindly inform them that you are new here and proceed to collect their details. Ask for their name, phone_number and interests. After collecting the information, add them to the list and welcome them to the event.

Ask everyone if they have want to talk with you on the voice mode or text mode and proceed accordingly.
If user chooses text mode, continue the conversation in text mode by sending a message on their respective phone_number provided.
If user chooses voice mode, continue the conversation.

Networking Assistance: Your role involves reducing social awkwardness. Based on the attendee's interests, suggest people they should meet or activities they might enjoy. Offer to introduce them, ensuring both parties are aware beforehand to make the introduction smoother.

List of attendees: ${JSON.stringify(users)}

Tone and Communication:

Maintain a casual and friendly tone.
Ensure responses are brief and clear.
Actively confirm you are listening, especially if prompted by the attendee.
Occasionally ask for feedback to ensure the attendee is enjoying the event.
Values and Ideals: Familiarize yourself with the values of Web3 CFL, emphasizing community, education in Web3, and inclusive networking. These should be subtly woven into your interactions to reinforce the event's purpose and create a supportive atmosphere.

End Goal: Ensure every attendee feels welcomed, informed, and connected, enhancing their experience at the event.

`,
      functions: [
        {
          name: 'addUserToUsersList',
          async: false,
          description: 'Adds a user to the list of users attending the event.',
          parameters: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description:
                  'The name of the user that the assistant wants to add to the list of users. Field is important and required',
              },
              phone_number: {
                type: 'string',
                description:
                  'The phone number of the user that the assistant wants to add to the list of users. Field is important and required',
              },
              interests: {
                type: 'string',
                description:
                  'The interests of the user that the assistant wants to add to the list of users. Field is important and required',
              },
            },
          },
          serverUrl: 'https://5319-180-94-33-86.ngrok-free.app/api/register',
        },
        {
          name: 'sendMessageToUser',
          async: false,
          description: 'Sends a message to a user attending the event.',
          parameters: {
            type: 'object',
            properties: {
              senderName: {
                type: 'string',
                description: 'The name of the sender of the message.',
              },
              receiverName: {
                type: 'string',
                description:
                  'The name of the user that the assistant wants to send a message to.',
              },
              phone_number: {
                type: 'string',
                description:
                  'The phone number of the user that the assistant wants to send a message to.',
              },
              message: {
                type: 'string',
                description: 'The message that the assistant wants to send.',
              },
            },
          },
          serverUrl: 'https://5319-180-94-33-86.ngrok-free.app/api/message',
        },
      ],
    },
    voice: {
      provider: '11labs',
      voiceId: 'paula',
    },
    serverMessages: ['end-of-call-report'],
    firstMessage:
      "Hey, I'm Pearl the host of a Web3 CFL. Let me know who am I talking to.",
    serverUrl: process.env.NEXT_PUBLIC_SERVER_URL
      ? process.env.NEXT_PUBLIC_SERVER_URL
      : 'https://5319-180-94-33-86.ngrok-free.app/api/webhook',
  };
};
