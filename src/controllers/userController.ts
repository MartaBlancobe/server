import { Request, Response } from 'express';


import pool from '../database';

class UserController {

    public async login(req: Request, res: Response): Promise<any> {
        const { usuario } = req.body;
        const { password } = req.body;
        const user = await (await pool).query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
        const pass = await (await pool).query('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario,password]);
        if (user.length > 0 && pass.length > 0) {
            return res.json('Inicio de sesión correcto');
        }else if(user.length > 0 && pass.length <= 0 ){
            return res.status(404).json('La contraseña no es correcta');
        }
        res.status(404).json({ message: "El usuario no existe" });
    }

    public async createFormContact(req: Request, res: Response): Promise<void> {
        const result = await (await pool).query  ('INSERT INTO contactos set ?', [req.body]);
        res.json({ message: 'Mensaje registrado' });
    }


    public async registerUser(req: Request, res: Response): Promise<void> {
        const result = await (await pool).query  ('INSERT INTO usuarios set ?', [req.body]);
        res.json({ message: 'Usuario registrado' });
    }


   
}

const userController = new UserController;
export default userController;