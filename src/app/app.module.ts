import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';

import { PedidoModule } from './pedido/pedido.module';

import 'hammerjs';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,BrowserAnimationsModule, AppBoostrapModule, MaterialModuleModule, PedidoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
