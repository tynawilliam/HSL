import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AnswersModule } from './answers/answers.module';
import { QuestionsModule } from './questions/questions.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, AnswersModule, QuestionsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
