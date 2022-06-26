import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddQuestionDto } from './dtos/add-question.dto';
import { QuestionResponseDto } from './dtos/questions-response.dto';
import { UpdateQuestionDto } from './dtos/update-question.dto';

@Injectable()
export class QuestionsService {
  constructor(private prismaService: PrismaService) {}

  async create(data: AddQuestionDto) {
    const numberExists = await this.prismaService.questions.findFirst({
      where: { number: data.number },
    });
    if (numberExists) {
      throw new ConflictException('Question number already exists');
    }

    try {
      return await this.prismaService.questions.create({ data });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        console.log(e);
      }
      throw new HttpException('Something went wrong.', 409);
    }
  }

  async findAll(): Promise<QuestionResponseDto[]> {
    try {
      return await this.prismaService.questions.findMany({
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

  async findOne(id: number): Promise<QuestionResponseDto> {
    try {
      return await this.prismaService.questions.findFirst({
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

  async update(
    id: number,
    data: UpdateQuestionDto,
  ): Promise<QuestionResponseDto> {
    try {
      return await this.prismaService.questions.update({
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

  async delete(id: number) {
    try {
      await this.prismaService.questions.delete({
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
