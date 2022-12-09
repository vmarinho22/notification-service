import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { NotificationEntity } from './entities/notification.entity';
import { NotificationRepository } from './repositories/notification.repository';

@Injectable()
export class NotificationsService {
  constructor(private readonly repository: NotificationRepository) {}

  async create(
    createNotificationDto: CreateNotificationDto,
  ): Promise<NotificationEntity> {
    return this.repository.create(createNotificationDto);
  }

  async findAll(): Promise<NotificationEntity[]> {
    return this.repository.findAll();
  }

  async findOne(id: string): Promise<NotificationEntity> {
    return this.repository.findOne(id);
  }

  async update(
    id: string,
    updateNotificationDto: UpdateNotificationDto,
  ): Promise<NotificationEntity> {
    return this.repository.update(id, updateNotificationDto);
  }

  async remove(id: string): Promise<NotificationEntity> {
    return this.repository.remove(id);
  }
}
