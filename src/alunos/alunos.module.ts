import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';

@Module({
  imports: [PrismaModule],
  controllers: [AlunosController],
  providers: [AlunosService],
})
export class AlunosModule {}
