import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string;
  senha: string;
  data: any;
  constructor(
    private apiService: ApiService,
    private router: Router,
    public toastController: ToastController
  ) { }

  async mensagemUsuarioSenha() {
    const toast = await this.toastController.create({
      message: 'Usuário ou senha inválido!',
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

  ngOnInit() {
  }

  entrar() {
    window.sessionStorage.setItem('usuarioLogado', 'false');

    this.apiService
      .getDadosApi('usuarios')
      .subscribe(data => {
        console.log(data);
        this.data = data;
        this.data.forEach(element => {
          if ((element.usuario === this.usuario) && (element.senha === this.senha)) {
            window.sessionStorage.setItem('usuarioLogado', 'true');

            this.router.navigate(['/contatos']);
          }
        });

        if (window.sessionStorage.getItem('usuarioLogado') !== 'true') {
          this.mensagemUsuarioSenha();
        }
      });
  }
}
