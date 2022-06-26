import { IsString } from 'class-validator';

export class addUserDto {
  @IsString()
  id: string;
}
