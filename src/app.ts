import express from 'express';
import morgan from 'morgan';
import routes from './routes/index.routes';


const app = express();


// Middlewares 
app.use(morgan('dev'));


// Routes
routes(app);








export default app;