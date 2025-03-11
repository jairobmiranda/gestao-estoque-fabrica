import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtividadeController } from './atividade/atividade.controller';
import { UserService } from './user/user.service';
import { ProdutoService } from './produto/produto.service';
import { ProdutoController } from './produto/produto.controller';

@Module({
  imports: [],
  controllers: [AppController, AtividadeController, ProdutoController],
  providers: [AppService, UserService, ProdutoService],
})
export class AppModule {}
