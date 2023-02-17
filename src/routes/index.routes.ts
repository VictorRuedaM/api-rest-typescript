import {Application} from 'express';
import {router as items} from '../components/items/items.routes';


function routes(app: Application){

  app.use('/items', items);
}



export default routes;