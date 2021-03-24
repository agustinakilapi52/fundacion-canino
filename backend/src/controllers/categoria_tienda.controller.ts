import { con } from "../database";

import {  Request, Response} from "express";

import { ICategoriaTienda } from "../models/categoria_tienda";

export class CategoriaTiendaController{

    public async listarCategoriaTienda(req:Request, res:Response)
    {
        //Logro la conexion con la base de datos
        const base = await con();

        let cat_tienda = await base.query("select * from categorias");
             
        return res.json(cat_tienda);
        
    }

    public  async guardarCategoriaTienda(req:Request, res:Response) 
    {
        const base = await con();

       
        let cat_tienda:ICategoriaTienda = req.body;
        
        await base.query("insert into categorias set ?",[cat_tienda]);
        
        return res.json('Guardado con exito');

    }

    public async eliminarCategoriaTienda(req:Request,res:Response)
    {
        const base = await con();

        let id_categoria_tienda =req.params.id_categoria_tienda

        await base.query("delete from categorias where id_categoria_tienda =?",[id_categoria_tienda]);

        return res.json('Se elimino correctamente');
    }

    public async actualizarCategoriaTienda(req:Request,res:Response)
    {
        const base = await con();

        let id_categoria_tienda = req.params.id_categoria_tienda;
        let nuevo = req.body;

        await base.query("update categorias set ? where id_categoria_tienda = ?", [nuevo,id_categoria_tienda]);

        return res.json('Se actualizo correctamente');
    }

    public async obtenerCategoriaTienda(req:Request,res:Response)
    {
        const base = await con();

        let id_categoria_tienda = req.params.id_categoria_tienda;

        let unCategoria = await base.query("select * from categorias where id_categoria_tienda = ?",[id_categoria_tienda])

        return res.json(unCategoria[0]);
    }



}

