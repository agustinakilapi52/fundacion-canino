import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AdminProductosTiendaService } from "../../service/admin-productos-tienda.service";
import { FormBuilder, FormGroup, Form, Validators } from "@angular/forms";
import { IProductosT } from 'src/app/models/admin_producto_tienda';
import {  IProductoDetalle } from 'src/app/models/admin_detalle_producto';
import { Router } from "@angular/router";

@Component({
  selector: 'app-detalle-producto-public',
  templateUrl: './detalle-producto-public.component.html',
  styleUrls: ['./detalle-producto-public.component.css']
})
export class DetalleProductoPublicComponent implements OnInit {

  id_productos:number;

  unProducto:IProductosT;
 
  imagenesUnProducto:IProductoDetalle;

  constructor(private router:Router,private fb:FormBuilder,private activatedRoute:ActivatedRoute,private serviceProducto:AdminProductosTiendaService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.id_productos = params.id_productos;
      }
    );

    this.obtenerDetalleProducto(this.id_productos);

    this.mostrarImagenesProductos(this.id_productos);
  }

  obtenerDetalleProducto(id_productos:number)
  {
    this.serviceProducto.getOneProducto(this.id_productos).subscribe (
      resultado => {
        this.unProducto = resultado;
      },
      error => console.log(error)
    )
  }

  mostrarImagenesProductos(id_productos:number)
  {
  this.serviceProducto.getImagenesOneProducto(id_productos).subscribe(
    resultado => {
      this.imagenesUnProducto = resultado;
    },
    error => console.log(error)
  )
  }

}
