import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import 'hammerjs';
import { PedidosModule } from './pedidos/pedidos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,BrowserAnimationsModule, AppBoostrapModule, MaterialModuleModule, PedidosModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
