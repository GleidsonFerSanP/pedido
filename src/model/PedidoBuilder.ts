import { Pedido } from './Pedido';
import { Cliente } from './Cliente';
import { ItemPedido } from './ItemPedido';

export class PedidoBuilder{

    private instance: Pedido = null;

    constructor(){
        this.instance = new Pedido();
    }

    public data(data: Date): PedidoBuilder{
        this.instance.data = data;
        return this;
    }

    public item(itemPedido: ItemPedido):PedidoBuilder{
        this.instance.itens.push(itemPedido);
        return this;
    }

    public cliente(cliente: Cliente): PedidoBuilder{
        this.instance.cliente = cliente;
        return this;
    }

    public build(): Pedido{
        return this.instance;
    }
}