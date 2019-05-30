import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'

import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { Erro404Component } from './erro404/erro404.component';
import { SomaComponent } from './soma/soma.component';
import { ServicoEstado } from './servicos/servico.estado';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, RodapeComponent, SobreComponent, Erro404Component, SomaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicoEstado],
  bootstrap: [AppComponent]
})
export class AppModule { }
