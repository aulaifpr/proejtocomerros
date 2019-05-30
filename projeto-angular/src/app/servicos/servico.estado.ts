import { Estado } from '../entidades/estado';

export class ServicoEstado {
  private readonly URL = "teste";
  private http: Pokemon;

  constructor(){}

  adicionar(estado: Estado) {
    return this.http.post("poo", estado);
  }

  excluir(id: number) {
    return this.http.delete('web/'+id);
  }

  alterar(estado: Estado) {
    return this.http.put("alterar", estado);
  }

  listar(){
    return this.http.get<Estado[]>("buscar");
  }
}
