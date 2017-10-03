import { ClienteBuilder } from '../../../model/ClienteBuilder';
import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../model/Pedido';
import { PedidoBuilder } from '../../../model/PedidoBuilder';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent implements OnInit {
  public pedidos: Array<Pedido> = [];
  constructor() { }

  ngOnInit() {

this.pedidos.push(
  new PedidoBuilder()
  .cliente(
    new ClienteBuilder()
    .build())
.build()
)

  }

}
