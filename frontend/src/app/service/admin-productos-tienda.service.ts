import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import {IProductosT } from "../models/admin_producto_tienda";
import { IProductoDetalle } from '../models/admin_detalle_producto';


@Injectable({
  providedIn: 'root'
})
export class AdminProductosTiendaService {

  constructor(private http:HttpClient) { }

  establecerPortada(id_ip:number,id_productos:number)
  {
    return this.http.get('http://localhost:4200/producto-portada/'+id_ip+'/'+id_productos);
  }
  
   updateProducto(datosProducto:IProductosT)
   {
    
    let id_productos = datosProducto.id_productos;
   
   
    return this.http.put('http://localhost:4200/productos/'+id_productos,datosProducto);
  
   }


   saveProducto(datosProducto:IProductosT,files:FileList)
   {

    const fd = new FormData(); //Genero la instancia fd (FORM DATA)

    fd.append('nombre',datosProducto.nombre); //Con la dicha instancia puedo ordenar los datos. Dentro de fd se almacena nombre evento, descripcion, etc
    fd.append('descripcion',datosProducto.descripcion);
    fd.append('precio',datosProducto.precio);
    fd.append('inventario',datosProducto.inventario);
    fd.append('id_categoria',datosProducto.id_categoria);
    fd.append('talla',datosProducto.talla);
    fd.append('color',datosProducto.color);

    //Recorro la lista de imagenes con un FOR, a medida que se recorren se insertan
    for (let index = 0; index < files.length; index++) {
     
      fd.append('imagen_producto',files[index]) //A medida que recorre imagen por imagen vamos almacenando en img-evento 
                                          //las imagenes que en definitiva se almacena en fd   
    }


     return this.http.post('http://localhost:4200/productos',fd); //A traves del metodo POST y a traves de la ruta enviamos fd a la REST API 
    }                                                          //y como responde retornamos su respuesta

    getProducto()
    { 
      return this.http.get<IProductosT[]>('http://localhost:4200/productos');
    }

    getOneProducto(id_productos:number)
   {
     return this.http.get<IProductosT>('http://localhost:4200/productos/'+id_productos);
   }
    
   getImagenesProducto(id_productos:number)
    {
       return this.http.get<IProductoDetalle[]>('http://localhost:4200/listar_imagenes_productos/'+id_productos); // A través del metodo get obtenemos las imagenes de un evento especifico gracias a su id
      
    }
     
    getImagenesOneProducto(id_productos:number)
    {
       return this.http.get<IProductoDetalle>('http://localhost:4200/listar-imagenes-un-productp/'+id_productos); // A través del metodo get obtenemos las imagenes de un evento especifico gracias a su id
      
    }
  

    addImagenesProducto(id_productos:number,files:FileList) //Se comunica a traves de http y del metodo put a la ruta deseada
    {
      const fd = new FormData();

        for (let index = 0; index < files.length; index++) {
          fd.append('imagen_producto',files[index]);
          
        }   
      
      return this.http.put('http://localhost:4200/agregar_imagenes_productos/'+id_productos,fd);
    }

    deleteImagenesProducto(id_ip:number,public_id:string)
    {
      return this.http.delete('http://localhost:4200/eliminar_imagenes_producto/'+id_ip+'/'+public_id);
    }
    
    deleteProducto(id_productos:number)
    {
      return this.http.delete('http://localhost:4200/productos/'+id_productos);
    }
}
