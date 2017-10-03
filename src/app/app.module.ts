import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { PedidoModule } from './pedido/pedido.module';
import { httpFactory } from "../providers/http-factory";

import 'hammerjs';
import { TesteService } from '../providers/teste-service';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpModule, AppBoostrapModule, MaterialModuleModule, PedidoModule],
  providers: [TesteService, {
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
