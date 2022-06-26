import { IsInt, IsString } from 'class-validator';

export class AnswerResponseDto {
  @IsInt()
  id: number;

  @IsString()
  userId: string;

  @IsInt()
  questionId: number;

  @IsString()
  body: string;
}
