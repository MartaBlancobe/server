import express, { Router } from 'express';
import userController from '../controllers/userController';


class UserRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/formContact', userController.createFormContact);
        this.router.post('/login', userController.login);
        this.router.post('/registerUser', userController.registerUser);
    }

}

export default new UserRoutes().router;

