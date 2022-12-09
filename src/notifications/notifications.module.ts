import { Module } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { NotificationRepository } from './repositories/notification.repository';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService, PrismaService, NotificationRepository],
})
export class NotificationsModule {}
