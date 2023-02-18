import { Router } from "express";
import * as controller from './controllers'



const router = Router();

router.get('/', controller.getItems);
router.get('/:id', controller.getItem);
router.post('/', controller.createItem);
router.put('/', controller.updateItem);
router.delete('/', controller.deleteItem);



export {router};