"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_tienda_controller_1 = require("../controllers/categoria_tienda.controller");
let Cat_tiendaController = new categoria_tienda_controller_1.CategoriaTiendaController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorCategoriaT = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorCategoriaT.route('/categoria_tienda').get(Cat_tiendaController.listarCategoriaTienda);
enrutadorCategoriaT.route('/categoria_tienda').post(Cat_tiendaController.guardarCategoriaTienda);
enrutadorCategoriaT.route('/categoria_tienda/:id_categoria_tienda').delete(Cat_tiendaController.eliminarCategoriaTienda);
enrutadorCategoriaT.route('/categoria_tienda/:id_categoria_tienda').put(Cat_tiendaController.actualizarCategoriaTienda);
enrutadorCategoriaT.route('/categoria_tienda/:id_categoria_tienda').get(Cat_tiendaController.obtenerCategoriaTienda);
exports.default = enrutadorCategoriaT;
