import { Produto } from "./produto";

export class Cosmeticos extends Produto{

    private _fragancia: string;

    constructor(id: number, nome: string, tipo: number, preco: number, fragancia: string) {
        super(id, nome, tipo, preco);
        this._fragancia = fragancia;
    }
    

  // metodo Get
    public get fragancia(): string {
        return this._fragancia;
    }

   // Metodo Set
    public set fragancia(fragancia: string) {
        this._fragancia = fragancia;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("           fragancia- " + this._fragancia);
    }


}