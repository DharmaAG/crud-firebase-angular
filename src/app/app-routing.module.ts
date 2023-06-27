import { Contato } from './contato/contato';
import { Comida } from './comida/comida';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AddContatoComponent } from './contato/add-contato/add-contato.component';
import { ListContatoComponent } from './contato/list-contato/list-contato.component';
import { EditContatoComponent } from './contato/edit-contato/edit-contato.component';

import { AddcomidaComponent } from './comida/add-comida/add-comida.component';
import { ListcomidaComponent } from './comida/list-comida/list-comida.component';
import { EditComidaComponent } from './comida/edit-comida/edit-comida.component';



const routes: Routes = [

  { path: '', redirectTo: '/list-contato', pathMatch: 'full' },
  { path: 'add-contato', component: AddContatoComponent },
  { path: 'list-contato', component: ListContatoComponent },
  { path: 'edit-contato/:id', component: EditContatoComponent },

  { path: '', redirectTo: '/list-comida', pathMatch: 'full' },
  { path: 'add-comida', component: AddcomidaComponent },
  { path: 'list-comida', component: ListcomidaComponent },
  { path: 'edit-comida/:id', component: EditComidaComponent }

];

@NgModule({

  imports: [CommonModule,RouterModule.forRoot(routes)],

  exports: [RouterModule],

  declarations: []

})

export class AppRoutingModule { }
