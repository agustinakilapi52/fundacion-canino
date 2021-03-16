import { Component, OnInit } from '@angular/core';
import { IFormularioA } from 'src/app/models/formulario_adopcion';
import { FormularioPublicService } from '../../service/formulario-public.service';
import { LocalidadesService } from "../../service/localidades.service";

import { ProvinciaService } from "../../service/provincia.service";
import { FormBuilder,FormGroup, Form, Validators } from "@angular/forms";
import { IProvincia } from 'src/app/models/provincia';
import { ILocalidades } from 'src/app/models/localidades';
import { ICanino } from 'src/app/models/canino' 
import { CaninoService } from "../../service/canino.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-adopcion-public',
  templateUrl: './formulario-adopcion-public.component.html',
  styleUrls: ['./formulario-adopcion-public.component.css']
})
export class FormularioAdopcionPublicComponent implements OnInit {

  listFormularioA : IFormularioA[]=[];
  lista_provincia: IProvincia[];
  lista_localidades: ILocalidades[];
  lista_caninos: ICanino[];
 
  formAdopcion:FormGroup;
 
  buscarFormulario:any;
 
  p:number = 1;
 
  identificador: number;
 
  display: any = 'display:none';
  responsive: any = 'col-lg-12 col-sm-12 col-xs-12'

  constructor(private activatedRoute:ActivatedRoute, private formularioPublicServ:FormularioPublicService ,private fb:FormBuilder, private localidadesServ:LocalidadesService, private provinciaServ:ProvinciaService, private caninoServ:CaninoService) {
   
    this.formAdopcion = this.fb.group({
      id_formulario:[null],
      nombre:['',[Validators.required,Validators.minLength(3)]],
      apellido:['',[Validators.required,Validators.minLength(3)]],
      direccion:['',[Validators.required]],
      dni:['',[Validators.required]],
      telefono:['',[Validators.required,Validators.minLength(8)]],
      correo:['',[Validators.required]],
      canino:['',[Validators.required]],
      id_localidad:['',[Validators.required]],
      provincia_id:[,[Validators.required]],
      requisito:[8,[Validators.required]],

    });
 }

ngOnInit(): void {

 this.listarFormularioA();
 this.obtenerProvincia();
 this.dameLocalidades;
 this.obtenerCanino();

 this.activatedRoute.params.subscribe(
  params => {
    this.identificador = params.numero;
    if (this.identificador == 1){
      this.display = 'display:block';
      this.responsive = 'col-lg-4 col-sm-12 col-xs-12'
    }
  }
);


}

obtenerCanino()
{
  this.caninoServ.getCanino().subscribe(
    resultado => {
    this.lista_caninos = resultado;
  },
    error => console.log(error)
  )
}

obtenerProvincia()
{
  this.provinciaServ.getProvincia().subscribe(
    resultado => {
    this.lista_provincia = resultado;
  },
    error => console.log(error)
  )
}

dameLocalidades(provincia_id:number)
{
  this.localidadesServ.obtenerLocalidades(provincia_id).subscribe(
    resultado =>{
     this.lista_localidades = resultado;
    }, 
    error => console.log(error)
  )
}

listarFormularioA()
{
  this.formularioPublicServ.getFormularioA().subscribe(
    resultado => this.listFormularioA = resultado,
    error => console.log(error)
    
  )
}

guardarFormularioA()
{
  if(this.formAdopcion.value.id_formulario){

    this.formularioPublicServ.updateFormularioA(this.formAdopcion.value).subscribe(
      respuesta =>{
        console.log(respuesta);
        //refresca la grilla
        this.formAdopcion.reset();
        this.listarFormularioA();

      },
      error => console.log(error)
    )
  }

  else{
  //console.log(this.formAdopcion.value);
  this.formularioPublicServ.saveFormularioA(this.formAdopcion.value).subscribe(
    resultado => {
      console.log(resultado);
      //refresca la grilla
      this.formAdopcion.reset();
      this.listarFormularioA();
    },
    error => console.log(error)
  );
}
}


editarFormularioA(formularioA:IFormularioA)
{
  this.formAdopcion.setValue(formularioA);
}

eliminarFormularioA(id_formulario:number)
{

  if(confirm("¿Está seguro que desea ejecutar esta acción?"))
  {
    this.formularioPublicServ.deleteFormularioA(id_formulario).subscribe(
      respuesta => {
        console.log(respuesta);
        this.listarFormularioA();
      }, 
      error => console.log(error)
    )
  }
} 
}

