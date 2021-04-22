import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import {IContacto  } from "../models/contacto";

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

 
  constructor(private http:HttpClient) {}

getContacto()
{
  return this.http.get<IContacto[]>("http://localhost:4200/contacto");
}

saveContacto(unContacto:IContacto)
{
  return this.http.post("http://localhost:4200/contacto", unContacto);
}

updateContacto(unContacto:IContacto)
{
  let id:number = unContacto.id_contacto;
  return this.http.put("http://localhost:4200/contacto/"+id, unContacto);
}

deleteContacto(id_contacto:number)
{
  return this.http.delete("http://localhost:4200/contacto/"+id_contacto);
}

}