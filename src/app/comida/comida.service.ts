import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Comida } from './comida';

@Injectable({

  providedIn: 'root'

})

export class comidaService {

  listacomidasRef: AngularFireList<Comida>;

  comidaRef: AngularFireObject<Comida>;



  constructor(private db: AngularFireDatabase) {

    //inicialização dos caminhos ao firebase

    this.listacomidasRef = this.db.list('list-comidas');

    this.comidaRef = this.db.object('list-comidas/' + 0);

  }



  // Inserir comida

  insertcomida(comida: Comida) {

    this.listacomidasRef.push({

      nome: comida.nome,

      origem: comida.origem,

      tipo: comida.tipo,

    });

  }



  // Buscar um único Objeto comida pelo seu ID

  getcomidaById(id: string): AngularFireObject<Comida> {

    this.comidaRef = this.db.object('list-comidas/' + id);

    return this.comidaRef;

  }



  // Fetch Students List

  getcomidaList(): AngularFireList<Comida> {

    return this.listacomidasRef;

  }



  // Update Student Object

  updatecomida(comida: Comida) {

    this.comidaRef.update({

      nome: comida.nome,

      origem: comida.origem,

      tipo: comida.tipo,

    });

  }



  // Delete Student Object

  deleteComida(id: String) {

    this.comidaRef = this.db.object('list-comidas/' + id);

    this.comidaRef.remove();

  }

}
