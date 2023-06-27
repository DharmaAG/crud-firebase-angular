import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { comidaService } from '../comida.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({

  selector: 'app-edit-comida',

  templateUrl: './edit-comida.component.html',

  styleUrls: ['./edit-comida.component.css']

})

export class EditcomidaComponent implements OnInit{

  comidaForm: FormGroup;



  constructor(

    private comidaService: comidaService,

    private fb: FormBuilder,

    private location: Location,

    private activeRoute: ActivatedRoute,

    private router: Router,

    private toastr: ToastrService

  ){

    this.comidaForm = this.createForm();

  }



  createForm(){

    return this.fb.group({

      nome: new FormControl('', Validators.required),

      origem: new FormControl('', Validators.required),

      tipo: new FormControl('', Validators.required)

    });

  }



  ngOnInit(){

    const id = this.activeRoute.snapshot.paramMap.get('id');

    if (id != null) {

      this.comidaService.getcomidaById(id).valueChanges().subscribe(data => {

        this.comidaForm.setValue(data as any);

      });

    }

  }



  submitForm(){

    this.comidaService.updatecomida(this.comidaForm.value);

    this.toastr.success(

      this.comidaForm.controls['nome'].value + " atualizado."

    );

    this.router.navigate(['list-comida']);

  }

  goBack(){

    this.location.back();

  }



  get nome(){

    return this.comidaForm.get('nome');

  }



  get origem(){

    return this.comidaForm.get('origem');

  }



  get tipo(){

    return this.comidaForm.get('tipo');

  }

}
