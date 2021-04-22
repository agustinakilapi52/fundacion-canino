import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacto';
import { ContactoService } from "../../service/contacto.service";

import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-formulario-adopcion',
  templateUrl: './formulario-adopcion.component.html',
  styleUrls: ['./formulario-adopcion.component.css']
})
export class FormularioAdopcionComponent implements OnInit {
  listContacto:IContacto[]=[];

  formContacto: FormGroup;

  buscarContacto:any;

  p:number = 1;

  constructor(private ContactoServ:ContactoService, private fb: FormBuilder) {

    this.formContacto = this.fb.group({

      id_contacto:[null],
      nombre:['',[Validators.required]],
      email:['',[Validators.required]],
      asunto:['',[Validators.required]],
      mensaje:['',[Validators.required]]
    });

   }

  ngOnInit(): void {

    this.obtenerContacto();
  }

  obtenerContacto()
  {
    this.ContactoServ.getContacto().subscribe(
      resultado => this.listContacto = resultado,
      error => console.log(error)
    )
  }

  guardarContacto()
  {

    if(this.formContacto.value.id_contacto)
    {
      this.ContactoServ.updateContacto(this.formContacto.value).subscribe(
        respuesta=> {
          console.log(respuesta);
          this.obtenerContacto();
          this.formContacto.reset();
        },
        error => console.log(error)
      )
    }else{

    //console.log(this.formProvincia.value);
    this.ContactoServ.saveContacto(this.formContacto.value).subscribe(
      resultado => {
        console.log(resultado);
        this.formContacto.reset();
        this.obtenerContacto();
      },
      error => console.log(error)
    );
    }


  }

  editarContacto(contacto:IContacto)
  {
    this.formContacto.setValue(contacto);
  }

  
  eliminarContacto(id_contacto:number)
  {

    if(confirm("¿Está seguro que desea ejecutar esta acción?"))
    {
      this.ContactoServ.deleteContacto(id_contacto).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerContacto();
        }, 
        error => console.log(error)
      )
    }

}

}
