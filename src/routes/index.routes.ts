import {Application} from 'express';
import {router as items} from '../components/items/items.routes';
import {router as auth} from '../components/auth/auth.route';


function routes(app: Application){

  app.use('/api/items', items);
  app.use('/api/auth', auth);
}



export default routes;