import { con } from "../database";
import {  Request, Response} from "express";
import cloudinary from "cloudinary";
import  fs from "fs-extra";
import { IProductosT} from "../models/productos_tienda";
import { decodeBase64 } from "bcryptjs";


//conectarse en cloudinary

cloudinary.v2.config({
    cloud_name:'dylbe29a5',
    api_key:'488978864977245',
    api_secret:'gzdIYgfgjrCr9uGJm5SzpeyKCkg',
})

export class ProductosTiendaController {

    async establecerPortada(req:Request,res:Response)
    {
        let id_ip = req.params.id_ip;
        let id_productos = req.params.id_productos;

        const base = await con();

        //Primero ponemos todas las imagenes como portada = 0
        const portadasEnEstadocero = {
            portada:0
        }
        await base.query('update imagenes_productos set ? where id_productos = ?',[portadasEnEstadocero,id_productos]);

        
        //Establecer como portada una imagen
        const datosImagenesProductos = {
            portada:1
        }
        await base.query('update imagenes_productos set ? where id_ip = ?',[datosImagenesProductos,id_ip]);
        
        const unaFila = await base.query('select * from imagenes_productos where id_ip = ?',[id_ip]);

        let datosProducto = {
            imagen_portada:unaFila[0].imagen_url
        }

        await base.query('update productos set ? where id_productos = ?',[datosProducto,id_productos]);
        res.json ('Se establecio la portada');
    }

    public async listarProducto(req:Request, res:Response)
    {
        //Logro la conexion con la base de datos
        const base = await con();

        let productos = await base.query("select * from productos");
             
        return res.json(productos);
        
    }

    public  async guardarProducto(req:Request,res:Response) 
    {
        try{
        const files:any = req.files;
        console.log(req.body);

        const nombre = req.body.nombre;
        const descripcion = req.body.descripcion;
        const precio = req.body.precio;
        const inventario = req.body.inventario;
        const id_categoria = req.body.id_categoria;
        const talla = req.body.talla;
        const color = req.body.color;
    
        const base = await con();

        const unProducto = {
               nombre:nombre,
               descripcion:descripcion,
               precio:precio,
               inventario:inventario,
               id_categoria:id_categoria,
               talla:talla,
               color:color
         }
        
        const resultado = await base.query('insert into productos set ?',[unProducto]);

        //

        for (let i = 0; i < files.length; i++) {

            //le especificamos el path(la ruta) de la imagen guardado en uploads
            const resultado_cloudinary = await cloudinary.v2.uploader.upload(files[i].path);

            //obtiene la ubicacion exacta de la img
            const imagenes_producto = {
                id_productos:resultado.insertId,
                imagen_url:resultado_cloudinary.url,
                public_id:resultado_cloudinary.public_id
            }
        
            await base.query('insert into imagenes_productos set ?',[imagenes_producto]);
            await fs.unlink(files[i].path);


        }
        
        return res.json('El producto fue guardado');
    } catch(err){
        res.json(err);
    }
    }

    async actualizarProducto(req:Request,res:Response)
    {
       if(!req.files)
       {
           let unProducto = req.body;         

           const updateProducto = {
               nombre:req.body.nombre,
               descripcion:req.body.descripcion,
               precio:req.body.precio,
               inventario:req.body.inventario,
               id_categoria:req.body.id_categoria,
               talla:req.body.talla,
               color:req.body.color
    
           }
           const base = await con();
           await base.query('update productos set ? where id_productos = ?',[updateProducto,req.body.id_productos])
           
           res.json("Se actualizo correctamente");
        }
    }

    public async obtenerProducto(req:Request,res:Response)
    {
        const base = await con();

        let id_productos = req.params.id_productos;

        let unProducto = await base.query('select * from productos where id_productos = ?',[id_productos]);

        return res.json(unProducto[0]);
    }

    public async listarImagenProducto(req:Request,res:Response)
    {
        //listamos todas las imagenes pertenecientes a un evento. ESte metodo va a tener que recibir como parametro
        //la id de un evento

        let id_productos = req.params.id_productos; //la ruta recoje este parametro para posteriormente hacer jquery- obtener imagens

        const base = await con();
        //la lista que obtenemos a traves de query la guardamos en la variable lista_imagenes_evento
       
        let listar_imagenes_productos = await base.query('select * from imagenes_productos where id_productos = ?',[ id_productos]);
       
        //retornamos lo almacenado en la variable

        res.json (listar_imagenes_productos);
    }

    async agregarImagenProducto(req:Request,res:Response)
    {
        const files:any = req.files;

        let id_productos = req.params.id_productos;

        const base = await con ();


        for (let index = 0; index < files.length; index++) {
           
            const resultado_cloud = await cloudinary.v2.uploader.upload(files[index].path);

            const imagen_producto= {

                id_productos:id_productos,
                imagen_url:resultado_cloud.url,
                public_id:resultado_cloud.public_id
            }

            await base.query('insert into imagenes_productos set ?', [imagen_producto]);

            await fs.unlink(files[index].path); //con esto logro ubicar la imagen para poder eliminarla
        }
        
        res.json("Se guardaron las imagenes de manera exitosa");
        
    }
    
    async eliminarImagenProducto(req:Request,res:Response) 
    {
        //debo recibir el id de la imagen ya que
        //necesito eliminar desde el id de la imagen, no del evento
        let id_ip = req.params.id_ip; //cuando consuma la ruta voy a eliminar desde el id
        let public_id = req.params.public_id; //necesitamos el public id para eliminarlo desde cloudinary evitando ocupar espacio innecesario.
        
        const base = await con();
        await base.query ('delete from imagenes_productos where id_ip = ?', [id_ip]);
        await cloudinary.v2.uploader.destroy(public_id);

        res.json("se elimino exitosamente");
    }

    async eliminarProducto(req:Request,res:Response)
    {
        const base = await con();

        let id_productos =req.params.id_productos
        let listar_imagenes_producto = await base.query('select * from imagenes_productos where id_productos =?', [id_productos]); //Selecciono todas las imagenes de un evento en particular
        await base.query('delete from productos where id_productos =?',[id_productos]);
       

        for (let index = 0; index < listar_imagenes_producto.length; index++) {
          
            await cloudinary.v2.uploader.destroy(listar_imagenes_producto[index].public_id); //A medida que recorre el for y cumple un ciclo obtiene el public_id y elimino la imagen desde cloud
            
        }
        
        await base.query('delete from imagenes_productos where id_productos =?', [id_productos]);
        
        return res.json('El producto se elimino completamente');
    }

    async listarUnProducto(req:Request,res:Response)
    {
        let id_productos =req.params.id_productos;

        const base = await con();

        const unProducto = await base.query('select * from productos where id_productos = ?',[id_productos]);

        res.json(unProducto[0]);

    }

    async obtenerImagenesUnProducto(req:Request, res:Response) 
    {
            let id_productos = req.params.id_productos;

            const base = await con();

            const listar_imagenes_un_producto = await base.query('select * from imagenes_productos where id_productos = ?', [id_productos]);
            
            res.json(listar_imagenes_un_producto);
    }
   

   
}