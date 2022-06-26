import { Answers } from '@prisma/client';
import { IsArray, IsDate, IsString } from 'class-validator';

export class UserResponseDto {
  @IsString()
  id: string;

  @IsArray()
  answers: Array<Answers>;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
