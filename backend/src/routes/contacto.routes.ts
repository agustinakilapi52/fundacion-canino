import { Router } from "express";

import { ContactoController } from "../controllers/contacto.controllers";

let Cont = new ContactoController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorContacto = Router();

//Defino las rutas de cada funcion 
enrutadorContacto.route('/contacto').get(Cont.listarContacto);
enrutadorContacto.route('/contacto').post( Cont.guardarContacto);
enrutadorContacto.route('/contacto/:id_contacto').delete( Cont.eliminarContacto);
enrutadorContacto.route('/contacto/:id_contacto').put( Cont.actualizarContacto);
enrutadorContacto.route('/contacto/:id_contacto').get( Cont.obtenerContacto);

export default enrutadorContacto;