import { Endereco } from '../entidades/endereco';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable()
export class ServicoEndereco {
  //private readonly URL = "https://viacep.com.br/ws/"+endereco.cep+"/json/";
  //private http: Pokemon;

  constructor(private http: HttpClient){}

  listar(cep: string){
    return this.http.get<Endereco[]>("https://viacep.com.br/ws/"+cep+"/json/").pipe(take(1));
  }
}
