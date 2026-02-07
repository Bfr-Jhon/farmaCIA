import read, { keyInYNStrict } from "readline-sync";
import { Input } from "./src/util/Input";
import { Produto } from "./src/model/produto";
import { Medicamentos } from "./src/model/Medicamentos";
import { Cosmeticos } from "./src/model/Cosmeticos";
import { ProdutoController } from "./src/Controller/ProdutoController";

// Criar um objeto Global da classe ProdutoController
const produtos = new ProdutoController();
// Criar um Array contendo os Tipos de Produto
const TipoProdutos = ['Medicamentos', 'Cosmeticos']

export function main(): void {



  console.log("Criar Contas Teste");
  // medicamentos
    let med1: Medicamentos = new Medicamentos(produtos.gerarId(), "paracetamol", 1, 15.90, "Dipirona");
    produtos.cadastrar(med1);

    let med2: Medicamentos = new Medicamentos(produtos.gerarId(), "Ibuprofeno", 1, 10.00, "Torxilax");
    produtos.cadastrar(med2);

// cosmeticos
    let cos1: Cosmeticos = new Cosmeticos(produtos.gerarId(), "Shampoo", 2, 25.00, "Frutas Vermelhas");
    produtos.cadastrar(cos1);

    let cos2: Cosmeticos = new Cosmeticos(produtos.gerarId(), "Condicionador", 2, 30.00, "hortela");
    produtos.cadastrar(cos2);
    
    // listar produtos
    produtos.listarTodos();


    //variavel auxiliar 
    let opcao, id1, tipo, preco: number;
    let nome, generico, fragancia: string; 

    const tipoProdutos = ["Medicamentos", "Cosmeticos"];

    


    


    while (true) {
        
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                   FarmaCia                          ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas os Produtos               ");
        console.log("            3 - Buscar Conta por id                    ");
        console.log("            4 - Atualizar Dados do produto             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
    
        console.log("Entre com a opcao desejada: ");
        opcao = Input.questionInt("");
    
        if(opcao === 0){
            console.log("Saindo do FarmaCia...")
            sobre();
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log("criar Conta")
            console.log("Digite o nome do produto: ");
            nome = read.question(" ");

            console.log("\nDigite o Tipo do Produto: ");
            tipo = read.keyInSelect(tipoProdutos, "", {cancel: false}) + 1;

            console.log("\nDigite o preço do produto: ");
            preco = Input.questionFloat("");

            switch(tipo){
                case 1:
                    console.log("digite o nome do medicamento generico: ");
                    generico = Input.question("");
                    produtos.cadastrar(new Medicamentos(produtos.gerarId(), nome, tipo, preco, generico));
                    break;
                    case 2:
                        console.log("digite a fragancia do cosmetico: ");
                        fragancia = Input.question("");
                        produtos.cadastrar(new Cosmeticos(produtos.gerarId(), nome, tipo, preco, fragancia));
                        break;
            }
            keyPress()
                break;


            case 2:
                console.log("Listar Produtos")
                produtos.listarTodos();
                keyPress()
                break;

            case 3:
                console.log("Buscar Produtos por id")
                    console.log("Digite o id da Conta: ");
                    id1 = Input.questionInt("");
                    produtos.procurarPorId(id1);
                
                keyPress()
                break;
            


            case 4:
                console.log("Atualizar Dados")

                atualizarConta();

                keyPress()
                break;
            
            case 5:
                    console.log("Apagar Produto")

                    deletarContaPorId();
                keyPress()
                break;

        }
    
    
    }


}

function sobre(): void{
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Jhonatha ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/bfr-jhon");
    console.log("*****************************************************");
}


function keyPress(): void{
    console.log("Pressione Enter para Continuar...");
    read.prompt();
}
// ATUALIZAR DADOS DA CONTA
function atualizarDados(): void{
 
}



    // opcao 4 - atualizar dados
    function atualizarConta(): void{
        console.log("Digite o Id da Conta ");
        const id = Input.questionInt("");

        const produto = produtos.buscarPorId(id);
        if(produto !== null){

        let nome: string = produto.nome;
        const tipo: number = produto.tipo;
        let preco: number = produto.preco; 
        

        // atualizacao do nome do produto
        console.log("\n Nome atual do produto ", nome);
        console.log("Digite o novo nome do produto \n (Pressione enter para manter o nome atual)");
        let entrada: string = Input.question("");
        
        nome = entrada.trim() === "" ? nome : entrada;

        // atualizacao do preco
        console.log("Preco atual", preco);
        console.log("Digite o novo valor do produto \n (Pressione enter para manter o valor atual)");
         entrada = Input.question("");

         preco = entrada.trim() === "" ? preco : parseFloat(entrada.replace(",","."));



            // atualizacao do tipo 
            switch(tipo){
                case 1: // Medicamentos
                    let generico : string = (produto as Medicamentos).generico;

                    //atualização genericos

                    console.log("Nome do generico atual ", generico);
                    console.log("Digite o novo Nome do Medicamento Generico \n (Pressione Enter para manter o Valor Atual)");
                    entrada = Input.question("");

                    generico = entrada.trim() === "" ? generico : entrada;
                    produtos.atualizar(new Medicamentos (id, nome, tipo, preco, generico ));

                    break;

                    case 2: //Cosmeticos
                    let fragancia: string = (produto as Cosmeticos).fragancia;

                    //atualizacao dos cosmeticos

                    console.log("Valor atual da fragancia ", fragancia);

                    console.log("Digite o novo Nome da fragancia \n (Pressione Enter para manter o Valor Atual)");
                     entrada = Input.question("");

                     fragancia = entrada.trim() === "" ? fragancia : entrada;

                     produtos.atualizar(new Cosmeticos (id, nome, tipo, preco, fragancia));
                     break;
            }

        


        }
        else{
            console.log(`O Produto ${id} nao existe`)
        }

    }


    function deletarContaPorId(): void{
        console.log("Digite o id da Conta ");
        const id = Input.questionInt("");
        const confirmar = keyInYNStrict("Tem certeza que Deseja apagar o Produto? ");

        if(confirmar === true){
            produtos.deletar(id);

        }
        else{
            console.log("Operacao Cancelada!"); 
        }
    }



 main()