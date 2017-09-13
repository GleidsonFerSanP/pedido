import { NgModule, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos.component';

@NgModule({
  declarations: [
    PedidosComponent
  ],
  imports: [
    CommonModule,
    PedidosComponent
  ],
  exports: [PedidosComponent]
})
export class PedidosModule { }
