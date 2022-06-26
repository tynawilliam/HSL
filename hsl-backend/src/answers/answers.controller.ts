import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AddAnswerDto } from './dtos/add-answer.dto';

@Controller({
  path: 'api/answers',
})
export class AnswersController {
  constructor(private answersService: AnswersService) {}

  @Post()
  async create(@Body() body: AddAnswerDto) {
    return this.answersService.create(body);
  }

  @Get()
  async findAll() {
    return this.answersService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.answersService.findOne(parseInt(id));
  }
}
