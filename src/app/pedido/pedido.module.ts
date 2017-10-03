import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { TesteComponent } from './teste/teste.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PedidoListComponent, TesteComponent],
  exports: [PedidoListComponent, TesteComponent]
})
export class PedidoModule { }
