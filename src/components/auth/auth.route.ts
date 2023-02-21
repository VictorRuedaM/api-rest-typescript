import { Router } from "express";
import * as controller from './controllers/auth.controller';

const router = Router();

router.post('/register', controller.authRegister);
router.post('/login', controller.authLogin);




export {router};