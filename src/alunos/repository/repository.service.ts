import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAlunoDto } from '../dto/create-aluno.dto';
import { UpdateAlunoDto } from '../dto/update-aluno.dto';

@Injectable()
export class AlunosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAlunoDto) {
    return this.prisma.aluno.create({ data });
  }

  async findAll() {
    return this.prisma.aluno.findMany();
  }

  async findById(id: number) {
    return this.prisma.aluno.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateAlunoDto) {
    return this.prisma.aluno.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.aluno.delete({ where: { id } });
  }
}
