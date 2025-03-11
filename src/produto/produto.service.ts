import { Injectable } from '@nestjs/common';
import { Produto } from 'src/produto.interface';

@Injectable()
export class ProdutoService {
  private produtos: Produto[] = [
    {
      id: 1,
      nome: 'Produto 1',
      preco: 100,
      descricao: 'Descricao 1',
      quantidade: 10,
      categoria: 'Categoria 1',
    },
    {
      id: 2,
      nome: 'Produto 2',
      preco: 200,
      descricao: 'Descricao 2',
      quantidade: 20,
      categoria: 'Categoria 2',
    },
    {
      id: 3,
      nome: 'Produto 3',
      preco: 300,
      descricao: 'Descricao 3',
      quantidade: 30,
      categoria: 'Categoria 3',
    },
  ];

  findAll(): Produto[] {
    return this.produtos;
  }

  findOne(id: number): Produto {
    const produto = this.produtos.find((produto) => produto.id === id);
    if (!produto) {
      throw new Error(`Produto com id ${id} não encontrado`);
    }
    return produto;
  }
}
