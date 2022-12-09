import { Injectable, NotFoundException } from '@nestjs/common';
import { NotificationEntity } from '../entities/notification.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { CreateNotificationDto } from './../dto/create-notification.dto';
import { UpdateNotificationDto } from './../dto/update-notification.dto';

@Injectable()
export class NotificationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createNotificationDto: CreateNotificationDto,
  ): Promise<NotificationEntity> {
    return this.prisma.notification.create({
      data: createNotificationDto,
    });
  }

  async findAll(): Promise<NotificationEntity[]> {
    return this.prisma.notification.findMany();
  }

  async findOne(id: string): Promise<NotificationEntity> {
    return this.prisma.notification.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateNotificationDto: UpdateNotificationDto,
  ): Promise<NotificationEntity> {
    const notification = await this.prisma.notification.findUnique({
      where: { id },
    });

    if (!notification) {
      throw new NotFoundException(`Notificação com id ${id} não encontrado`);
    }

    return this.prisma.notification.update({
      where: { id },
      data: updateNotificationDto,
    });
  }

  async remove(id: string): Promise<NotificationEntity> {
    const notification = await this.prisma.notification.findUnique({
      where: { id },
    });

    if (!notification) {
      throw new NotFoundException(`Notificação com id ${id} não encontrado`);
    }
    return this.prisma.notification.delete({
      where: { id },
    });
  }
}
