import { Answers } from '@prisma/client';
import { IsArray, IsDate, IsInt, IsString } from 'class-validator';

export class QuestionResponseDto {
  @IsInt()
  id: number;

  @IsInt()
  number: number;

  @IsString()
  body: string;

  @IsArray()
  answers: Array<Answers>;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
