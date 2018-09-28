import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContatosDetalhePage } from './contatos-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: ContatosDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContatosDetalhePage]
})
export class ContatosDetalhePageModule {}
