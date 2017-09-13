import { ItemPedido } from './ItemPedido';
import { Cliente } from './Cliente';

export class Pedido{

    private _id: any;
    private _cliente: Cliente;
    private _data: Date;
    private _itens: Array<ItemPedido> = [];
    private _subTotal: number;
    private _desconto: number;
    private _total: number;

    constructor(){
    }

	public get cliente(): Cliente {
		return this._cliente;
	}

	public set cliente(value: Cliente) {
		this._cliente = value;
    }
    

	public get id(): any {
		return this._id;
	}

	public set id(value: any) {
		this._id = value;
	}
    

	public get data(): Date {
		return this._data;
	}

	public set data(value: Date) {
		this._data = value;
	}

	public get itens(): Array<ItemPedido>  {
		return this._itens;
	}

	public set itens(value: Array<ItemPedido> ) {
		this._itens = value;
	}

	public get subTotal(): number {
        this._subTotal = this.total - this._desconto;
		return this._subTotal;
	}

	public get total(): number {
        this._itens.forEach(item => {
            this._total += item.qtd * item.produto.preco;
        });

		return this._total;
    }

	public get desconto(): number {
		return this._desconto;
	}

	public set desconto(value: number) {
		this._desconto = value;
	}
}