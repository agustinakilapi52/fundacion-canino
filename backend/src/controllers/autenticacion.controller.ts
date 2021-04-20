import { Response, Request, query} from "express";
import { con } from "../database";
import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";

export class AutenticacionController{
   
    async registrar(req:Request,res:Response){

        // un salt genera un fragmento unico y no repetitivo
        const salt = await bcrypt.genSalt(10);
        //bcrypt genera un cifrado utilizando un hash junto con la contraseña ingresada
        const password_cifrada = await bcrypt.hash(req.body.password,salt);

        const unUsuario = {
            username:req.body.username,
            password:password_cifrada,
            email:req.body.email
        }

        const base = await con();
        //guardar los datos del usuario en la constante resultado
        const resultado = await base.query('insert into usuario set ?',[unUsuario]);
        //guardar el token generado en la constante token 
        const token:string = jwt.sign({_id:resultado.insertId},process.env.TOKEN_SECRET || '12qwaszx');
        
        res.json(token);
     
    }

    async ingresar(req:Request,res:Response){ 

        const base = await con();

        const usuario = await base.query('select * from usuario where username = ?',[req.body.username]);
   
        if (!usuario[0]) 
        {
            res.json('usuario o contraseña incorrecta');   
        }else{
            //comparar la contraseña ingresada con las guardadas en la base
            const correctPassword = await bcrypt.compare(req.body.password, usuario[0].password);

            if(!correctPassword)
            {
                res.json('contraseña incorrecta');
            }
            else{
                const token:string = jwt.sign({_id:usuario[0].id_usuario},process.env.TOKEN_SECRET || '12qwaszx',{
                    expiresIn:60*60*24
                });

                res.json(token);
            }
        }
    }
}