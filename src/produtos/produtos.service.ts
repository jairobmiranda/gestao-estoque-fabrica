import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutosService {
  private readonly produtos = [
    {
      id: 1,
      nome: 'Produto 1',
      preco: 100,
      descricao: 'Descrição do Produto 1',
    },
    {
      id: 2,
      nome: 'Produto 2',
      preco: 200,
      descricao: 'Descrição do Produto 2',
    },
    {
      id: 3,
      nome: 'Produto 3',
      preco: 300,
      descricao: 'Descrição do Produto 3',
    },
  ];

  findAll() {
    return this.produtos;
  }

  findOne(id: number) {
    return this.produtos.find((produto) => produto.id === id);
  }
}
