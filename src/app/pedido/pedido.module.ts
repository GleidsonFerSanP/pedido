import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoListComponent } from './pedido-list/pedido-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PedidoListComponent],
  exports: [PedidoListComponent]
})
export class PedidoModule { }
