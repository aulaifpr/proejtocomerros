import { Component, OnInit } from '@angular/core';
import { Endereco } from '../entidades/endereco';
import { ServicoEndereco } from '../servicos/servico.endereco';
import { Observable } from 'rxjs';

@Component({
  selector: 'endereco-component'
  ,templateUrl: 'endereco.component.html'
  ,styleUrls: ['endereco.component.css']
})

export class EnderecoComponent implements OnInit{

  endereco$ : Observable<Endereco[]>;
  endereco : Endereco = new Endereco();
  //salvar: boolean = true;

  constructor(private servico: ServicoEndereco){
  }

  ngOnInit(){
    this.atualizar();
  }

  atualizar(){
    this.endereco$ = this.servico.listar(this.endereco.cep);
  }
/*
  adicionar() : void {
    if(this.salvar){
      this.servico.adicionar(this.endereco).subscribe(()=>{
        this.endereco$ = this.servico.listar();
      });
    }else{
      this.servico.alterar(this.endereco).subscribe(()=>{
        this.endereco$ = this.servico.listar();
      });
      //this.salvar = true;
    }
    this.endereco = new Endereco();
  }

  excluir(id:number) : void {
    this.servico.excluir(id).subscribe(()=>{
      this.endereco$ = this.servico.listar();
    });
  }

  alterar(endereco: Endereco) : void{
    this.endereco = endereco;
    this.salvar = false;
  }
*/
}
