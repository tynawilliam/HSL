import { IsString } from 'class-validator';

export class AddUserDto {
  @IsString()
  id: string;

  createdAt: Date;
  updatedAt: Date;
}
