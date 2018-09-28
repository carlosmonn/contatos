import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contatos-detalhe',
  templateUrl: './contatos-detalhe.page.html',
  styleUrls: ['./contatos-detalhe.page.scss'],
})
export class ContatosDetalhePage implements OnInit {

  id: string;
  contato: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.id = this.route.snapshot.params.id;

    this.contato = {
      id: '',
      nome: '',
      sobrenome: '',
      curriculo: ''
    };
  }

  ngOnInit() {
    this.apiService
      .getDadosApi('contatos/id/' + this.id)
      .subscribe(data => {
        console.log(data);
        this.contato = data;
      });
  }

}
