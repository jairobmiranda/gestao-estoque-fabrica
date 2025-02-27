import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtividadeController } from './atividade/atividade.controller';

@Module({
  imports: [],
  controllers: [AppController, AtividadeController],
  providers: [AppService],
})
export class AppModule {}
