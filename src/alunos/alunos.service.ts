import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AlunoEntity } from './entities/aluno.entity';
import { CreateAlunoDto } from './dto/create-aluno.dto';

@Injectable()
export class AlunosService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<AlunoEntity[]> {
    return this.prisma.aluno.findMany();
  }

  async findOne(id: number): Promise<AlunoEntity | null> {
    return this.prisma.aluno.findUnique({
      where: { id },
    });
  }

  async create(data: CreateAlunoDto): Promise<AlunoEntity> {
    return this.prisma.aluno.create({
      data,
    });
  }

  async update(id: number, data: Partial<AlunoEntity>): Promise<AlunoEntity> {
    return this.prisma.aluno.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<AlunoEntity> {
    return this.prisma.aluno.delete({
      where: { id },
    });
  }
}
