import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddUserDto } from './dtos/add-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserResponseDto } from './dtos/user-response.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create(data: AddUserDto) {
    const userExists = await this.prismaService.users.findFirst({
      where: { id: data.id },
    });
    if (userExists) {
      throw new ConflictException();
    }

    try {
      return await this.prismaService.users.create({
        data,
      });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        console.log(e);
      }
      throw new HttpException('Something went wrong.', 409);
    }
  }

  async findAll(): Promise<UserResponseDto[]> {
    try {
      return await this.prismaService.users.findMany({
        include: {
          answers: true,
        },
      });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        console.log(e);
      }
      throw new HttpException('Something went wrong.', 409);
    }
  }

  async findOne(id: string): Promise<UserResponseDto> {
    try {
      return await this.prismaService.users.findUnique({
        where: { id },
        include: {
          answers: true,
        },
      });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        console.log(e);
      }
      throw new HttpException('Something went wrong.', 409);
    }
  }

  async update(id: string, data: UpdateUserDto): Promise<UserResponseDto> {
    try {
      return await this.prismaService.users.update({
        where: { id },
        data,
        include: {
          answers: true,
        },
      });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        console.log(e);
      }
      throw new HttpException('Something went wrong.', 409);
    }
  }

  async delete(id: string) {
    try {
      await this.prismaService.users.delete({
        where: { id },
      });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        console.log(e);
      }
      throw new HttpException('Something went wrong.', 409);
    }
  }
}
