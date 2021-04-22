"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contacto_controllers_1 = require("../controllers/contacto.controllers");
let Cont = new contacto_controllers_1.ContactoController;
//Guardo dentro de enrutador la funcionalidad Router de express
const enrutadorContacto = express_1.Router();
//Defino las rutas de cada funcion 
enrutadorContacto.route('/contacto').get(Cont.listarContacto);
enrutadorContacto.route('/contacto').post(Cont.guardarContacto);
enrutadorContacto.route('/contacto/:id_contacto').delete(Cont.eliminarContacto);
enrutadorContacto.route('/contacto/:id_contacto').put(Cont.actualizarContacto);
enrutadorContacto.route('/contacto/:id_contacto').get(Cont.obtenerContacto);
exports.default = enrutadorContacto;
