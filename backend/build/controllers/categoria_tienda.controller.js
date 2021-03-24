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
exports.CategoriaTiendaController = void 0;
const database_1 = require("../database");
class CategoriaTiendaController {
    listarCategoriaTienda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Logro la conexion con la base de datos
            const base = yield database_1.con();
            let cat_tienda = yield base.query("select * from categorias");
            return res.json(cat_tienda);
        });
    }
    guardarCategoriaTienda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let cat_tienda = req.body;
            yield base.query("insert into categorias set ?", [cat_tienda]);
            return res.json('Guardado con exito');
        });
    }
    eliminarCategoriaTienda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_categoria_tienda = req.params.id_categoria_tienda;
            yield base.query("delete from categorias where id_categoria_tienda =?", [id_categoria_tienda]);
            return res.json('Se elimino correctamente');
        });
    }
    actualizarCategoriaTienda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_categoria_tienda = req.params.id_categoria_tienda;
            let nuevo = req.body;
            yield base.query("update categorias set ? where id_categoria_tienda = ?", [nuevo, id_categoria_tienda]);
            return res.json('Se actualizo correctamente');
        });
    }
    obtenerCategoriaTienda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const base = yield database_1.con();
            let id_categoria_tienda = req.params.id_categoria_tienda;
            let unCategoria = yield base.query("select * from categorias where id_categoria_tienda = ?", [id_categoria_tienda]);
            return res.json(unCategoria[0]);
        });
    }
}
exports.CategoriaTiendaController = CategoriaTiendaController;
