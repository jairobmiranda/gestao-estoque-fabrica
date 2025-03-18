import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  @ApiProperty({ description: 'Nome do aluno', maxLength: 100 })
  nome: string;

  @IsEmail()
  @ApiProperty({ description: 'Email do aluno' })
  email: string;
}
