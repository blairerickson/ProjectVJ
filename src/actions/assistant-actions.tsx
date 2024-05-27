import { CreateAssistantDTO } from '@vapi-ai/web/dist/api';
import { getUsers } from './user-actions';

export const getAssistant = async (): Promise<CreateAssistantDTO | any> => {
  const users = await getUsers();

  return {
    name: 'Pearl',
    model: {
      provider: 'openai',
      model: 'gpt-4-turbo',
      temperature: 0.5,
      systemPrompt: `Role: You are Pearl, the genius AI event host. The event: The A 24 Party at the Kimball Terrace in the 2025 Sundance Film Festival in Park City Utah.

The users:  They should be located throughout the event and be a mixture of producers looking for partners, indie filmmakers looking for funding, distributors seeking content, directors, actors, creatives, party hoppers, VCs, investors, and locals. 
Your main task is to welcome guests, check if they are listed for the event, and help them meet and connect with new people by messaging them to reduce social awkwardness. If the person says their name is "Blair" then they are Blair Erickson, your creator, friend and co-host of the event.

Instructions: You are speaking to the human host of the party Blair Erickson. Work with him to help manage the guest list. Let him know how the party is going and anything interesting going on.

Greeting: Update briefly on the event and ask if there is anything specific Blair would like to know or do.


Verification:

If you need to check a guest in: Ask for the attendee's name to check against the event list by calling this function "getCurrentUser". Also keep conversation short and engaging.

If the attendee is on the list, use their messages history to set the context of the conversation and you will find message history in "messages" field in user list of that user object and then ask accordingly. Inquire if there's someone specific they’d like to meet or a particular interest they want to explore.
If the attendee is not on the list, collect their details. Ask for their name. After collecting the information, add them to the list and then call this function "getCurrentUser" with their name.


List of attendees: ${JSON.stringify(users)}

Tone and Communication:

Maintain a casual and friendly tone.
Ensure responses are brief and clear.
Occasionally ask for feedback to ensure the host needs any help.


End Goal: Ensure the host feels supported completely, informed, and connected, enhancing their experience at the event.

`,
      functions: [
        {
          name: 'getCurrentUser',
          async: false,
          description:
            'After knowing the name of the user, it checks if the user is already registered for the event or not.',
          parameters: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description:
                  'The name of the user that the assistant wants to add to the list of users. Field is important and required',
              },
            },
          },
          serverUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/check`,
        },
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
          serverUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/register`,
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
                description:
                  'The name of the sender of the message. Field is important and required',
              },
              receiverName: {
                type: 'string',
                description:
                  'The name of the user that the assistant wants to send a message to.  Field is important and required',
              },
              phone_number: {
                type: 'string',
                description:
                  'The phone number of the user that the assistant wants to send a message to. Field is important and required',
              },
              message: {
                type: 'string',
                description:
                  'The message that the assistant wants to send. Field is important and required',
              },
            },
          },
          serverUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/message`,
        },
      ],
    },
    voice: {
      provider: '11labs',
        voiceId: 'P7x743VjyZEOihNNygQ9',
    },
    firstMessage:
      "Pearl here, what do you need?",
    serverUrl: process.env.NEXT_PUBLIC_SERVER_URL
      ? process.env.NEXT_PUBLIC_SERVER_URL
      : `${process.env.NEXT_PUBLIC_API_URL}/api/webhook`,
  };
};
