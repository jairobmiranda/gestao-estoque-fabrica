import { Module } from '@nestjs/common';
import { AlunosModule } from './alunos/alunos.module';
import { AlunosRepository } from './alunos/repository/repository.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtividadeController } from './atividade/atividade.controller';
import { PedidosModule } from './pedidos/pedidos.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { ProdutosController } from './produtos/produtos.controller';
import { ProdutosService } from './produtos/produtos.service';

@Module({
  imports: [PedidosModule, PrismaModule, AlunosModule],
  controllers: [AppController, AtividadeController, ProdutosController],
  providers: [AppService, ProdutosService, PrismaService, AlunosRepository],
})
export class AppModule {}
