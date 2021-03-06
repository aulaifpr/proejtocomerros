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
import { EstadoComponent } from './estado/estado.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { ServicoEndereco } from './servicos/servico.endereco';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, RodapeComponent, SobreComponent, Erro404Component, SomaComponent, EstadoComponent, EnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicoEstado, ServicoEndereco],
  bootstrap: [AppComponent]
})
export class AppModule { }
