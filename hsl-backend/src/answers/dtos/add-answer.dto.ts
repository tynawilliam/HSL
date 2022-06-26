import { IsDate, IsInt, IsString } from 'class-validator';

export class AddAnswerDto {
  @IsString()
  userId: string;

  @IsInt()
  questionId: number;

  @IsString()
  body: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
