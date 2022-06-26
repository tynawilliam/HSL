import { HttpException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddAnswerDto } from './dtos/add-answer.dto';
import { AnswerResponseDto } from './dtos/answer-response.dto';

@Injectable()
export class AnswersService {
  constructor(private prismaService: PrismaService) {}

  async create(data: AddAnswerDto) {
    try {
      return await this.prismaService.answers.create({ data });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        console.log(e);
      }
      throw new HttpException('Something went wrong.', 409);
    }
  }

  async findAll(): Promise<AnswerResponseDto[]> {
    try {
      return await this.prismaService.answers.findMany();
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        console.log(e);
      }
      throw new HttpException('Something went wrong.', 409);
    }
  }

  async findOne(id: number): Promise<AnswerResponseDto> {
    try {
      return await this.prismaService.answers.findUnique({
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
