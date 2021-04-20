import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

import { AdminProductosTiendaService  } from "../../service/admin-productos-tienda.service";

import { IProductoDetalle } from "../../models/admin_detalle_producto";

import { FormBuilder, FormGroup } from "@angular/forms";

import { IHtmlInputProducto } from "../../models/inputElement";

import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-admin-detalle-productos',
  templateUrl: './admin-detalle-productos.component.html',
  styleUrls: ['./admin-detalle-productos.component.css']
})
export class AdminDetalleProductosComponent implements OnInit {

  id_productos:number;

  imagenes_productos:IProductoDetalle[] = [];

  formDetalleProducto:FormGroup;
  
  files:FileList;

  imagenes_leidas = [];

  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private productoService:AdminProductosTiendaService) { 
    this.formDetalleProducto = this.fb.group({

      archivo:['']
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe ( //Cuando la ruta activa reciba el parametro quiero guardar en id_evento el parametro recibido para localizar mediante el id cada detalle de evento
      params => {
          this.id_productos = params.id_canino
      }
    );
    this.listarImagenesProducto(this.id_productos);
  }

  listarImagenesProducto(id_productos:number) //utilizo este metodo para listar las imagenes
  {
    //como queremos obtener las imagenes que estan almacenadas en la bd
    //debemos realizar una consulta a la rest api para acceder a ellas
    
    this.productoService.getImagenesProducto(id_productos).subscribe (
      resultado => {
        this.imagenes_productos = resultado;
      },
      error => console.log(error)
    )
  } 

  mostrarImagenesSeleccionadasProducto(producto:IHtmlInputProducto)
  {
  this.files = producto.target.files;
   if(this.files)
    {
      for (let index = 0; index < this.files.length; index++) {
          const reader = new FileReader();
          reader.readAsDataURL(this.files[index]);
          reader.onload = () => {
            this.imagenes_leidas.push(reader.result);
        }       
      }
    } 
  }  
  agregarImagenesProducto()
  {
    this.productoService.addImagenesProducto(this.id_productos,this.files).subscribe (
      resultado => {
        
        this.imagenes_leidas = [];
        this.formDetalleProducto.reset(this.id_productos);
        this.listarImagenesProducto(this.id_productos);
      },
      error => console.log(error)
    )    
  } 
  eliminarImagenProducto (id_ip:number,public_id:string)
  {
  if(confirm('Esta seguro de llevar a cabo esta accion?')){

    this.productoService.deleteImagenesProducto(id_ip,public_id).subscribe(
      resultado => {
        console.log(resultado);
        this.listarImagenesProducto(this.id_productos);
      }
    )
   }
  }

  establecerPortada(id_ip:number)
  {
    this.productoService.establecerPortada(id_ip,this.id_productos).subscribe(
      resultado => {
        //Refrescamos la grilla
        this.listarImagenesProducto(this.id_productos);
      }
    )
  }

}
