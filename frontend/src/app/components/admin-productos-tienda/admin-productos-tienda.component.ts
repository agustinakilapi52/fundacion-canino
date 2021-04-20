import { Component, OnInit } from '@angular/core';
import { IProductosT } from 'src/app/models/admin_producto_tienda';
import {  AdminProductosTiendaService } from "../../service/admin-productos-tienda.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-productos-tienda',
  templateUrl: './admin-productos-tienda.component.html',
  styleUrls: ['./admin-productos-tienda.component.css']
})
export class AdminProductosTiendaComponent implements OnInit {

  producto:IProductosT[]=[];

  formProducto:FormGroup;

  files:FileList; //Creamos una lista de archivos para almacenar las imagenes
  imagenes_url= [];

  ocultar_boton_archivos:any = 'display:block';

  display: any = 'display:none';


  constructor(private router:Router,private productoService:AdminProductosTiendaService,private fb:FormBuilder) {
    this.formProducto = this.fb.group({

      id_productos:[null],
      nombre:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      precio:['',[Validators.required]],
      inventario:['',[Validators.required]],
      id_categoria:['',[Validators.required]],
      talla:['',[Validators.required]],
      color:['',[Validators.required]],
      archivo:['']
  });

  }
  

  ngOnInit(): void {
    this.listaProducto();
  }

  listaProducto()
  {
    this.productoService.getProducto().subscribe(
      resultado => {
        this.producto = resultado;
      }
    )
  }

  guardarProducto()
  {

    if (this.formProducto.value.id_productos)
    {
      this.productoService.updateProducto(this.formProducto.value).subscribe(
        resultado => {
          this.formProducto.reset();
          this.listaProducto();
        }
      )
    }
    else 
    { //Envio los archivos y los datos del formulario
    this.productoService.saveProducto(this.formProducto.value,this.files).subscribe(
      resultado => {
        console.log(resultado);
        this.imagenes_url = [];
        this.formProducto.reset();
        this.listaProducto();
      },
      error => console.log(error)
    );
    }

  }

  eliminarProducto(id_productos:number)
{
  if(confirm('Esta seguro de llevar a cabo esta accion?'))
  {
    this.productoService.deleteProducto(id_productos).subscribe (
      resultado => {
        console.log(resultado);
        this.listaProducto();
      }
    );
  }
}

//metodo encargado de mostrarme el detalle sobre el evento REDIRECCION
detalleProducto(id_productos:number) 
{
  
  //Para redirigirme a una ruta voy a tener que importarme un par de modulos. Para esto debe existir la ruta en el app-routing
  this.router.navigate(['/admin-detalle-producto',id_productos]);
  
}
editarProducto(datosProducto:IProductosT)
{ 

    this.ocultar_boton_archivos = 'display:none;'

    this.formProducto.setValue({
    id_productos:datosProducto.id_productos,
    nombre:datosProducto.nombre,
    descripcion:datosProducto.descripcion,
    precio:datosProducto.precio,
    inventario:datosProducto.inventario,
    id_categoria:datosProducto.id_categoria,
    talla:datosProducto.talla,
    color:datosProducto.color,
    archivo:''
  });
}
vaciarForm()
{
  this.ocultar_boton_archivos = 'display:block;'
  this.formProducto.setValue({
  id_productos:null,
  nombre:'',
  descripcion:'',
  precio:'',
  inventario:'',
  id_categoria:'',
  talla:'',
  color:'',
  archivo:''
});
}




}
