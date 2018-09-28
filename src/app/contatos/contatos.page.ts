import { Router } from '@angular/router';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  data: any;
  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiService
      .getDadosApi('contatos')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

  mostrarContato(id) {
    console.log(id);
    this.router.navigate(['/contatos-detalhe/id/' + id]);
  }

  sair() {
    console.log('Sair');
    window.sessionStorage.setItem('usuarioLogado', 'false');
    this.router.navigate(['/login']);
  }
}
