import { Notification } from '@prisma/client';

export class NotificationEntity implements Notification {
  id: string;
  source: string;
  target: string;
  message: string;
  visualized: boolean;
  createdAt: Date;
  updatedAt: Date;
}
