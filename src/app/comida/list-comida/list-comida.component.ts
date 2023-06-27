import { Component, OnInit} from '@angular/core';
import { comidaService } from '../comida.service';
import { ToastrService } from 'ngx-toastr';
import { Comida } from '../comida';

@Component({

  selector: 'app-list-comida',

  templateUrl: './list-comida.component.html',

  styleUrls: ['./list-comida.component.css'],

})

export class ListcomidaComponent implements OnInit {

  page = 1;

  listacomidas: Comida[] = [];

  listaVazia: Boolean = true;

  mostrarLoader: Boolean = true;



  constructor(

    private comidaService: comidaService,

    private toastr: ToastrService

  ) {}



  ngOnInit() {

    let fetchData = this.comidaService.getcomidaList();

    fetchData.snapshotChanges().subscribe((data) => {

      this.listacomidas = [];

      if (data.length <= 0) {

        this.listaVazia = true;

      } else {

        this.listaVazia = false;

        data.forEach((item: any) => {

          let comida = item.payload.toJSON();

          comida['$key'] = item.key;

          this.listacomidas.push(comida as Comida);

        });

      }

      this.mostrarLoader = false;

    });

  }



  deletecomida(comida: Comida) {

    if (window.confirm('Tem certeza que deseja remover o comida?')) {

      if (comida.$key != null) {

        this.comidaService.deleteComida(comida.$key);

        this.toastr.success(comida.nome + ' removido com sucesso.');

      }

    }

  }

}
