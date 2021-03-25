import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { ICategoriaTienda } from "../models/admin_categoria_tienda";

@Injectable({
  providedIn: 'root'
})
export class AdminCategoriaTiendaService {

  constructor(private http:HttpClient) { }

getCategoria_tienda()
{
  return this.http.get<ICategoriaTienda[]>("http://localhost:4200/categoria_tienda");
}

saveCategoria_tienda(unCategoria_tienda:ICategoriaTienda)
{
  return this.http.post("http://localhost:4200/categoria_tienda", unCategoria_tienda);
}

updateCategoria_tienda(unCategoria_tienda:ICategoriaTienda)
{
  let id:number = unCategoria_tienda.id_categoria_tienda;
  return this.http.put("http://localhost:4200/categoria_tienda/"+id, unCategoria_tienda);
}

deleteCategoria_tienda(id_categoria_tienda:number)
{
  return this.http.delete("http://localhost:4200/categoria_tienda/"+id_categoria_tienda);
}

}

