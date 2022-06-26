import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddQuestionDto } from './dtos/add-question.dto';
import { UpdateQuestionDto } from './dtos/update-question.dto';
import { QuestionsService } from './questions.service';

@Controller({
  path: 'api/questions',
})
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Post()
  async create(@Body() body: AddQuestionDto) {
    return this.questionsService.create(body);
  }

  @Get()
  async findAll() {
    return this.questionsService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.questionsService.findOne(parseInt(id));
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() body: UpdateQuestionDto) {
    return this.questionsService.update(parseInt(id), body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.questionsService.delete(parseInt(id));
  }
}
