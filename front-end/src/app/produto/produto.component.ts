import { Component, OnInit } from '@angular/core';
import { Iproduto } from './iproduto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Iproduto[];
  produtosPesquisados: Iproduto[] = [];
  titulo: string = 'Lista de Produtos';
  p: number = 1;
  itemsPaginas: number = 10;
  private _url: string = 'https://enigmatic-castle-62130.herokuapp.com/ammovarejo/produtos';

  _filtro: string;
  get filtro(): string {
    return this._filtro;
  }
  set filtro(value: string) {
    this._filtro = value;
    this.produtosPesquisados = this.filtro ? this.performFilter(this.filtro) : this.produtos;
  }

  ngOnInit() {
    this.http.get(this._url).subscribe(
      data => {
        this.produtos = <Iproduto[]>data;
        this.produtosPesquisados = this.produtos;
    });
  }

  constructor(private http: HttpClient) {
    this.produtosPesquisados = this.produtos;
  }

  performFilter(parametro: string) : Iproduto[] {
    parametro = parametro.toLocaleLowerCase();

    return this.produtos.filter((produto: Iproduto) => 
      produto.nome.toLocaleLowerCase().indexOf(parametro) !== -1);
  }  
}
