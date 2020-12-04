import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/authenticate', SessionController.authenticate);

export default routes;
