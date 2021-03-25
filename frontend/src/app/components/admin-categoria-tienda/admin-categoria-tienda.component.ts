import { Component, OnInit } from '@angular/core';
import { AdminCategoriaTiendaService } from "../../service/admin-categoria-tienda.service";

import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { ICategoriaTienda } from 'src/app/models/admin_categoria_tienda';

@Component({
  selector: 'app-admin-categoria-tienda',
  templateUrl: './admin-categoria-tienda.component.html',
  styleUrls: ['./admin-categoria-tienda.component.css']
})
export class AdminCategoriaTiendaComponent implements OnInit {

  listCategoriaTienda = [];

  formCategoriaTienda: FormGroup;

  buscarTienda:any;

  p:number = 1;

  constructor(private AdminCategoriaTiendaServ:AdminCategoriaTiendaService, private fb: FormBuilder) {

    this.formCategoriaTienda = this.fb.group({

      id_categoria_tienda:[null],
      nombre:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      imagen:['',[Validators.required]]
    });

   }

  ngOnInit(): void {

    this.obtenerCategoriaT();
  }

  obtenerCategoriaT()
  {
    this.AdminCategoriaTiendaServ.getCategoria_tienda().subscribe(
      resultado => this.listCategoriaTienda = resultado,
      error => console.log(error)
    )
  }

  guardarCategoriaT()
  {

    if(this.formCategoriaTienda.value.id_categoria_tienda)
    {
      this.AdminCategoriaTiendaServ.updateCategoria_tienda(this.formCategoriaTienda.value).subscribe(
        respuesta=> {
          console.log(respuesta);
          this.obtenerCategoriaT();
          this.formCategoriaTienda.reset();
        },
        error => console.log(error)
      )
    }else{

    //console.log(this.formProvincia.value);
    this.AdminCategoriaTiendaServ.saveCategoria_tienda(this.formCategoriaTienda.value).subscribe(
      resultado => {
        console.log(resultado);
        this.formCategoriaTienda.reset();
        this.obtenerCategoriaT();
      },
      error => console.log(error)
    );
    }


  }

  editarCategoriaT(categoriaT:ICategoriaTienda)
  {
    this.formCategoriaTienda.setValue(categoriaT);
  }

  
  eliminarCategoriaT(id_categoria_tienda:number)
  {

    if(confirm("¿Está seguro que desea ejecutar esta acción?"))
    {
      this.AdminCategoriaTiendaServ.deleteCategoria_tienda(id_categoria_tienda).subscribe(
        respuesta => {
          console.log(respuesta);
          this.obtenerCategoriaT();
        }, 
        error => console.log(error)
      )
    }

}

}
