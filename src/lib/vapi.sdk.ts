import Vapi from '@vapi-ai/web';
import { envConfig } from '@/config/env.config';

if (!envConfig.vapi.token) {
  throw new Error(
    'Please define the NEXT_PUBLIC_VAPI_WEB_TOKEN environment variable inside .env.local'
  );
}

export const vapi = new Vapi(envConfig.vapi.token);
