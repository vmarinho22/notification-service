import { IsString } from 'class-validator';

export class CreateNotificationDto {
  @IsString({
    message: 'A fonte da notificação deve ser um UUID'
  })
  source: string;

  @IsString({
    message: 'O alvo da notificação deve ser um UUID'
  })
  target: string;

  @IsString({
    message: 'A mensagem deve ser do tipo texto'
  })
  message: string;
}
