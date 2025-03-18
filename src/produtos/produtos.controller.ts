import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Produtos } from './produtos.interface';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
@ApiTags('Produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  findAll(): Produtos[] {
    return this.produtosService.findAll();
  }
}
