import { Produto } from "../model/produto";

export interface ProdutoRepository {

    //Crud Produtos
    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;

}