import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let usuarioLogado: boolean;
    usuarioLogado = (window.sessionStorage.getItem('usuarioLogado') === 'true');

    console.log('Usuário logado: ', usuarioLogado);
    if (!usuarioLogado) {
      this.router.navigate(['/login']);
    }

    return usuarioLogado;
  }
}
