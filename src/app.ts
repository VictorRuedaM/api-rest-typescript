import express from 'express';
import morgan from 'morgan';
import routes from './routes/index.routes';


const app = express();

// Settings
app.use(express.json());

// Middlewares 
app.use(morgan('dev'));


// Routes
routes(app);








export default app;