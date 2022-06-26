import { IsDate, IsInt, IsString } from 'class-validator';

export class AddQuestionDto {
  @IsInt()
  number: number;

  @IsString()
  body: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
