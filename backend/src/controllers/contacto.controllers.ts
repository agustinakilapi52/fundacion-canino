import { con } from "../database";

import {  Request, Response} from "express";

import { IContacto } from "../models/contacto";

export class ContactoController{

    public async listarContacto(req:Request, res:Response)
    {
        //Logro la conexion con la base de datos
        const base = await con();

        let contacto = await base.query("select * from contacto");
             
        return res.json(contacto);
        
    }

    public  async guardarContacto(req:Request, res:Response) 
    {
        const base = await con();

       
        let contacto:IContacto = req.body;
        
        await base.query("insert into contacto set ?",[contacto]);
        
        return res.json('Guardado con exito');

    }

    public async eliminarContacto(req:Request,res:Response)
    {
        const base = await con();

        let id_contacto =req.params.id_contacto

        await base.query("delete from contacto where id_contacto =?",[id_contacto]);

        return res.json('Se elimino correctamente');
    }

    public async actualizarContacto(req:Request,res:Response)
    {
        const base = await con();

        let id_contacto= req.params.id_contacto;
        let nuevo = req.body;

        await base.query("update contacto set ? where id_contacto = ?", [nuevo,id_contacto]);

        return res.json('Se actualizo correctamente');
    }

    public async obtenerContacto(req:Request,res:Response)
    {
        const base = await con();

        let id_contacto= req.params.id_contacto;

        let unContacto = await base.query("select * from contacto where id_contacto = ?",[id_contacto])

        return res.json(unContacto[0]);
    }



}

