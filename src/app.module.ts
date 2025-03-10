import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtividadeController } from './atividade/atividade.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, AtividadeController],
  providers: [AppService, UserService],
})
export class AppModule {}
