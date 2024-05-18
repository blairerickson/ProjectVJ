export const envConfig = {
  vapi: {
    apiUrl: process.env.NEXT_PUBLIC_VAPI_API_URL,
    token: process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  twilio: {
    accountSid: process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID,
    authToken: process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN,
  },
};
