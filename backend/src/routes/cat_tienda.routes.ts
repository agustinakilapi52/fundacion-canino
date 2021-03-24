import { Router } from "express";

import { CategoriaTiendaController } from "../controllers/categoria_tienda.controller";

let Cat_tiendaController = new CategoriaTiendaController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorCategoriaT = Router();

//Defino las rutas de cada funcion 
enrutadorCategoriaT.route('/categoria_tienda').get( Cat_tiendaController.listarCategoriaTienda);
enrutadorCategoriaT.route('/categoria_tienda').post( Cat_tiendaController.guardarCategoriaTienda);
enrutadorCategoriaT.route('/categoria_tienda/:id_categoria_tienda').delete( Cat_tiendaController.eliminarCategoriaTienda);
enrutadorCategoriaT.route('/categoria_tienda/:id_categoria_tienda').put( Cat_tiendaController.actualizarCategoriaTienda);
enrutadorCategoriaT.route('/categoria_tienda/:id_categoria_tienda').get( Cat_tiendaController.obtenerCategoriaTienda);

export default enrutadorCategoriaT;