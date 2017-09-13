import { Produto } from './Produto';

export class ItemPedido{

    private _id: any;
    private _qtd: number = 1;
    private _produto: Produto;
    private _valorTotal: number;

    constructor(){
    }

	public get id(): any {
		return this._id;
	}

	public set id(value: any) {
		this._id = value;
	}

	public get qtd(): number  {
		return this._qtd;
	}

	public set qtd(value: number ) {
		this._qtd = value;
	}

	public get produto(): Produto {
		return this._produto;
	}

	public set produto(value: Produto) {
		this._produto = value;
	}

	public get valorTotal(): number {
        this._valorTotal = (this.qtd * this.produto.preco);
		return this._valorTotal;
	}

}