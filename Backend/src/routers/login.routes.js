import login from '../services/loginService.js';
import express from 'express';

const loginRouter = express.Router();

loginRouter.post('/', login);

export default loginRouter;

