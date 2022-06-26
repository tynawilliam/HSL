import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddUserDto } from './dtos/add-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller({
  path: 'api/users',
})
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() body: AddUserDto) {
    return this.usersService.create(body);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(id, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}
