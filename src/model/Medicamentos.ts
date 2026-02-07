import { Produto } from "./produto";

export class Medicamentos extends Produto{

    private _generico: string;

	constructor(id: number, nome: string, tipo: number, preco: number, generico: string) {
        super(id, nome, tipo, preco);
		this._generico = generico;
	}
    

  // metodo Get
	public get generico(): string {
		return this._generico;
	}

   // Metodo Set
	public set generico(generico: string) {
		this._generico = generico;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("           generico - " + this._generico);
    }


}