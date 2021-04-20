import { Component, OnInit } from '@angular/core';
import { IProductosT } from 'src/app/models/admin_producto_tienda';
import { AdminProductosTiendaService } from "../../service/admin-productos-tienda.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-tienda-home',
  templateUrl: './tienda-home.component.html',
  styleUrls: ['./tienda-home.component.css']
})
export class TiendaHomeComponent implements OnInit {

  lista_productos:IProductosT[]=[];

  p:number = 1;

  constructor(private router:Router,private productoService:AdminProductosTiendaService) { }

  ngOnInit(): void {

    this.obtenerProductos()
  }

  obtenerProductos()
  {
    this.productoService.getProducto().subscribe (
      resultado => {
        this.lista_productos = resultado;
      }
    )
  }

  detalleProductoPublic(id_productos:number) 
  {
    
    //Para redirigirme a una ruta voy a tener que importarme un par de modulos. Para esto debe existir la ruta en el app-routing
    this.router.navigate(['/detalle-producto',id_productos]);
    
  }

}
