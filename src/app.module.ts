import { Module } from '@nestjs/common';
import { AtividadeController } from './atividade/atividade.controller';
import { ProdutoController } from './produto/produto.controller';
import { ProdutoService } from './produto/produto.service';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AtividadeController, ProdutoController],
  providers: [UserService, ProdutoService],
})
export class AppModule {}
