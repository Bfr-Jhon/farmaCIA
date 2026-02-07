import { Produto } from "../model/produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository{

    private listaProdutos: Array<Produto> = new Array<Produto>();
    numero: number = 0;



    procurarPorId(id: number): void {
        let buscaProduto = this.buscarPorId(id);
        if(buscaProduto != null){
            buscaProduto.visualizar();
        }
        else
            console.log(`Produto com id ${id} não encontrado!`);
    }



    listarTodos(): void {
       for(let produto of this.listaProdutos) {
        produto.visualizar();
       }
    }


    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(`O Produto: ${produto.nome} com id ${produto.id} foi cadastrado com sucesso!`);
    }



    atualizar(produto: Produto): void {
            let buscaProduto = this.buscarPorId(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(`O Produto com id ${produto.id} foi atualizado com sucesso!`);
        } else {
            console.log(`Produto com id ${produto.id} não encontrado!`);
        }
    }
    


    deletar(id: number): void {
        let buscaProduto = this.buscarPorId(id);
        if(buscaProduto !== null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto),1);
            console.log("Foi Apagada Com Sucesso")
        }
        else{
            console.log(`o Produto ${id} não foi encontrado`);
        }



    }

    //Método auxiliar para gerar IDs automáticos
    public gerarId(): number {
        return ++this.numero;
    }


    
    // Checa se o Produto Existe
    public buscarPorId(id: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (produto.id === id) {
                return produto;
            }
        }
        return null; // Retorna null se o produto não for encontrado
    }

}

