import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { comidaService } from '../comida.service';

import { ToastrService } from 'ngx-toastr';

@Component({

  selector: 'app-add-comida',

  templateUrl: './add-comida.component.html',

  styleUrls: ['./add-comida.component.css']

})

export class AddcomidaComponent implements OnInit{

  comidaForm: FormGroup;



  constructor(

    private comidaService: comidaService,

    private fb: FormBuilder,

    private toastr: ToastrService){

      this.comidaForm = this.createForm();

    }



    ngOnInit(){

      this.comidaService.getcomidaList();

    }



    createForm(){

      return this.fb.group({

        nome: new FormControl('', Validators.required),

        origem: new FormControl('', Validators.required),

        tipo: new FormControl('', Validators.required )

      });

    }



    resetForm(){

      this.comidaForm.reset();

    }



    submitForm(){

      this.comidaService.insertcomida(this.comidaForm.value);

      this.toastr.success(

        this.comidaForm.controls['nome'].value + " adicionado"

      );

    }



    get nome(){

      return this.comidaForm.get('nome');

    }



    get origem(){

      return this.comidaForm.get('origem');

    }



    get tipo(){

      return this.comidaForm.get('tipoone');

    }

}
