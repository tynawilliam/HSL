import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateQuestionDto {
  @IsInt()
  @IsOptional()
  number: number;

  @IsString()
  @IsOptional()
  body: string;
}
