export interface SessionPayload {
  userId: string;
  [key: string]: any;
  expiresAt: Date;
}
