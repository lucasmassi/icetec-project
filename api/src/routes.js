import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import DeveloperController from './app/controllers/DeveloperController';
import UserController from './app/controllers/UserController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/authenticate', SessionController.authenticate);

routes.use(authMiddleware);

//Users
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.get('/users/:id', UserController.listById);
routes.get('/users', UserController.listAll);
routes.delete('/users/:id', UserController.delete);

//Developers
routes.post('/developers', DeveloperController.create);
routes.put('/developers/:id', DeveloperController.update);
routes.get('/developers/:id', DeveloperController.listById);
routes.get('/developers', DeveloperController.listAll);
routes.delete('/developers/:id', DeveloperController.delete);

export default routes;
