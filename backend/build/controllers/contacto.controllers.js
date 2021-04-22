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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactoController = void 0;
const database_1 = require("../database");
class ContactoController {
    listarContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Logro la conexion con la base de datos
            const base = yield database_1.con();
            let contacto = yield base.query("select * from contacto");
            return res.json(contacto);
        });
    }
    guardarContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let contacto = req.body;
            yield base.query("insert into contacto set ?", [contacto]);
            return res.json('Guardado con exito');
        });
    }
    eliminarContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_contacto = req.params.id_contacto;
            yield base.query("delete from contacto where id_contacto =?", [id_contacto]);
            return res.json('Se elimino correctamente');
        });
    }
    actualizarContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_contacto = req.params.id_contacto;
            let nuevo = req.body;
            yield base.query("update contacto set ? where id_contacto = ?", [nuevo, id_contacto]);
            return res.json('Se actualizo correctamente');
        });
    }
    obtenerContacto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_contacto = req.params.id_contacto;
            let unContacto = yield base.query("select * from contacto where id_contacto = ?", [id_contacto]);
            return res.json(unContacto[0]);
        });
    }
}
exports.ContactoController = ContactoController;
