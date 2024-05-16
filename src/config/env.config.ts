export const envConfig = {
  vapi: {
    apiUrl: process.env.NEXT_PUBLIC_VAPI_API_URL ?? 'https://west-api.vapi.ai',
    token:
      process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN ??
      '9474ac8f-f506-4614-8588-9c5719831faa',
  },
  database: {
    url:
      process.env.DATABASE_URL ??
      'mongodb+srv://mukul:mukul123@pearl-cluster.fmrazto.mongodb.net/?retryWrites=true&w=majority&appName=pearl-cluster',
  },
  twilio: {
    accountSid:
      process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID ??
      'AC43c5fd4543d9db061ba27adf607c4ba0',
    authToken:
      process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN ??
      '69f67d6b937423f5687a42caaff39a4d',
  },
};
