import { Router } from "express";

import { ProductosTiendaController } from "../controllers/productos_tienda.controller";
import multer from "../libs/multer";

let productos_tiendaController = new ProductosTiendaController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorProductos = Router();

//Defino las rutas de cada funcion 
enrutadorProductos.route('/productos').get( productos_tiendaController.listarProducto);
enrutadorProductos.route('/productos').post(multer.array('imagen_producto'),productos_tiendaController.guardarProducto);
enrutadorProductos.route('/productos/:id_productos').delete( productos_tiendaController.eliminarProducto);
enrutadorProductos.route('/productos/:id_productos').put( productos_tiendaController.actualizarProducto);
enrutadorProductos.route('/productos/:id_productos').get(productos_tiendaController.obtenerProducto);

//img rutas
enrutadorProductos.route('/listar_imagenes_productos/:id_productos').get(productos_tiendaController.listarImagenProducto);
enrutadorProductos.route('/agregar_imagenes_productos/:id_productos').put(multer.array('imagen_producto'),productos_tiendaController.agregarImagenProducto);
enrutadorProductos.route('/eliminar_imagenes_producto/:id_ip/:public_id').delete(productos_tiendaController.eliminarImagenProducto);
enrutadorProductos.route('/producto-portada/:id_ip/:id_productos').get(productos_tiendaController.establecerPortada);
enrutadorProductos.route('/productos/:id_productos').get(productos_tiendaController.listarUnProducto);
enrutadorProductos.route('/listar-imagenes-un-producto/:id_productos').get(productos_tiendaController.obtenerImagenesUnProducto);

export default enrutadorProductos;