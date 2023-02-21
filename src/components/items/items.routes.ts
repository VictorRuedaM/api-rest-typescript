import { Router } from "express";
import { handleLog } from "../../middlewares/log/log";
import * as controller from './controllers/item.controller';



const router = Router();

router.get('/', controller.getItems);
router.get('/:id', handleLog, controller.getItem);
router.post('/', controller.createItem);
router.put('/:id', controller.updateItem);
router.delete('/:id', controller.deleteItem);



export {router};