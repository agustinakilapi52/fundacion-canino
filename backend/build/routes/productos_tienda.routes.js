"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_tienda_controller_1 = require("../controllers/productos_tienda.controller");
const multer_1 = __importDefault(require("../libs/multer"));
let productos_tiendaController = new productos_tienda_controller_1.ProductosTiendaController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorProductos = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorProductos.route('/productos').get(productos_tiendaController.listarProducto);
enrutadorProductos.route('/productos').post(multer_1.default.array('imagen_producto'), productos_tiendaController.guardarProducto);
enrutadorProductos.route('/productos/:id_productos').delete(productos_tiendaController.eliminarProducto);
enrutadorProductos.route('/productos/:id_productos').put(productos_tiendaController.actualizarProducto);
enrutadorProductos.route('/productos/:id_productos').get(productos_tiendaController.obtenerProducto);
//img rutas
enrutadorProductos.route('/listar_imagenes_productos/:id_productos').get(productos_tiendaController.listarImagenProducto);
enrutadorProductos.route('/agregar_imagenes_productos/:id_productos').put(multer_1.default.array('imagen_producto'), productos_tiendaController.agregarImagenProducto);
enrutadorProductos.route('/eliminar_imagenes_producto/:id_ip/:public_id').delete(productos_tiendaController.eliminarImagenProducto);
enrutadorProductos.route('/producto-portada/:id_ip/:id_productos').get(productos_tiendaController.establecerPortada);
enrutadorProductos.route('/productos/:id_productos').get(productos_tiendaController.listarUnProducto);
enrutadorProductos.route('/listar-imagenes-un-producto/:id_productos').get(productos_tiendaController.obtenerImagenesUnProducto);
exports.default = enrutadorProductos;
