"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosTiendaController = void 0;
const database_1 = require("../database");
const cloudinary_1 = __importDefault(require("cloudinary"));
const fs_extra_1 = __importDefault(require("fs-extra"));
//conectarse en cloudinary
cloudinary_1.default.v2.config({
    cloud_name: 'dylbe29a5',
    api_key: '488978864977245',
    api_secret: 'gzdIYgfgjrCr9uGJm5SzpeyKCkg',
});
class ProductosTiendaController {
    establecerPortada(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_ip = req.params.id_ip;
            let id_productos = req.params.id_productos;
            const base = yield database_1.con();
            //Primero ponemos todas las imagenes como portada = 0
            const portadasEnEstadocero = {
                portada: 0
            };
            yield base.query('update imagenes_productos set ? where id_productos = ?', [portadasEnEstadocero, id_productos]);
            //Establecer como portada una imagen
            const datosImagenesProductos = {
                portada: 1
            };
            yield base.query('update imagenes_productos set ? where id_ip = ?', [datosImagenesProductos, id_ip]);
            const unaFila = yield base.query('select * from imagenes_productos where id_ip = ?', [id_ip]);
            let datosProducto = {
                imagen_portada: unaFila[0].imagen_url
            };
            yield base.query('update productos set ? where id_productos = ?', [datosProducto, id_productos]);
            res.json('Se establecio la portada');
        });
    }
    listarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Logro la conexion con la base de datos
            const base = yield database_1.con();
            let productos = yield base.query("select * from productos");
            return res.json(productos);
        });
    }
    guardarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const files = req.files;
                console.log(req.body);
                const nombre = req.body.nombre;
                const descripcion = req.body.descripcion;
                const precio = req.body.precio;
                const inventario = req.body.inventario;
                const id_categoria = req.body.id_categoria;
                const talla = req.body.talla;
                const color = req.body.color;
                const base = yield database_1.con();
                const unProducto = {
                    nombre: nombre,
                    descripcion: descripcion,
                    precio: precio,
                    inventario: inventario,
                    id_categoria: id_categoria,
                    talla: talla,
                    color: color
                };
                const resultado = yield base.query('insert into productos set ?', [unProducto]);
                //
                for (let i = 0; i < files.length; i++) {
                    //le especificamos el path(la ruta) de la imagen guardado en uploads
                    const resultado_cloudinary = yield cloudinary_1.default.v2.uploader.upload(files[i].path);
                    //obtiene la ubicacion exacta de la img
                    const imagenes_producto = {
                        id_productos: resultado.insertId,
                        imagen_url: resultado_cloudinary.url,
                        public_id: resultado_cloudinary.public_id
                    };
                    yield base.query('insert into imagenes_productos set ?', [imagenes_producto]);
                    yield fs_extra_1.default.unlink(files[i].path);
                }
                return res.json('El producto fue guardado');
            }
            catch (err) {
                res.json(err);
            }
        });
    }
    actualizarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.files) {
                let unProducto = req.body;
                const updateProducto = {
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    precio: req.body.precio,
                    inventario: req.body.inventario,
                    id_categoria: req.body.id_categoria,
                    talla: req.body.talla,
                    color: req.body.color
                };
                const base = yield database_1.con();
                yield base.query('update productos set ? where id_productos = ?', [updateProducto, req.body.id_productos]);
                res.json("Se actualizo correctamente");
            }
        });
    }
    obtenerProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_productos = req.params.id_productos;
            let unProducto = yield base.query('select * from productos where id_productos = ?', [id_productos]);
            return res.json(unProducto[0]);
        });
    }
    listarImagenProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //listamos todas las imagenes pertenecientes a un evento. ESte metodo va a tener que recibir como parametro
            //la id de un evento
            let id_productos = req.params.id_productos; //la ruta recoje este parametro para posteriormente hacer jquery- obtener imagens
            const base = yield database_1.con();
            //la lista que obtenemos a traves de query la guardamos en la variable lista_imagenes_evento
            let listar_imagenes_productos = yield base.query('select * from imagenes_productos where id_productos = ?', [id_productos]);
            //retornamos lo almacenado en la variable
            res.json(listar_imagenes_productos);
        });
    }
    agregarImagenProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = req.files;
            let id_productos = req.params.id_productos;
            const base = yield database_1.con();
            for (let index = 0; index < files.length; index++) {
                const resultado_cloud = yield cloudinary_1.default.v2.uploader.upload(files[index].path);
                const imagen_producto = {
                    id_productos: id_productos,
                    imagen_url: resultado_cloud.url,
                    public_id: resultado_cloud.public_id
                };
                yield base.query('insert into imagenes_productos set ?', [imagen_producto]);
                yield fs_extra_1.default.unlink(files[index].path); //con esto logro ubicar la imagen para poder eliminarla
            }
            res.json("Se guardaron las imagenes de manera exitosa");
        });
    }
    eliminarImagenProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //debo recibir el id de la imagen ya que
            //necesito eliminar desde el id de la imagen, no del evento
            let id_ip = req.params.id_ip; //cuando consuma la ruta voy a eliminar desde el id
            let public_id = req.params.public_id; //necesitamos el public id para eliminarlo desde cloudinary evitando ocupar espacio innecesario.
            const base = yield database_1.con();
            yield base.query('delete from imagenes_productos where id_ip = ?', [id_ip]);
            yield cloudinary_1.default.v2.uploader.destroy(public_id);
            res.json("se elimino exitosamente");
        });
    }
    eliminarProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_productos = req.params.id_productos;
            let listar_imagenes_producto = yield base.query('select * from imagenes_productos where id_productos =?', [id_productos]); //Selecciono todas las imagenes de un evento en particular
            yield base.query('delete from productos where id_productos =?', [id_productos]);
            for (let index = 0; index < listar_imagenes_producto.length; index++) {
                yield cloudinary_1.default.v2.uploader.destroy(listar_imagenes_producto[index].public_id); //A medida que recorre el for y cumple un ciclo obtiene el public_id y elimino la imagen desde cloud
            }
            yield base.query('delete from imagenes_productos where id_productos =?', [id_productos]);
            return res.json('El producto se elimino completamente');
        });
    }
    listarUnProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_productos = req.params.id_productos;
            const base = yield database_1.con();
            const unProducto = yield base.query('select * from productos where id_productos = ?', [id_productos]);
            res.json(unProducto[0]);
        });
    }
    obtenerImagenesUnProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_productos = req.params.id_productos;
            const base = yield database_1.con();
            const listar_imagenes_un_producto = yield base.query('select * from imagenes_productos where id_productos = ?', [id_productos]);
            res.json(listar_imagenes_un_producto);
        });
    }
}
exports.ProductosTiendaController = ProductosTiendaController;
