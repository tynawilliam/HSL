import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AnswersModule } from './answers/answers.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [UsersModule, AnswersModule, QuestionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
