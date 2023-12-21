import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import taskRouter from './routes/task.routes';


const app: Application = express();

app.set('port',process.env.PORT || 3000);
app.set('host',process.env.HOST || 'localhost');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cors());

const PREFIX = '/api/v1'

// routes
app.use (
    PREFIX + '/tasks',
    taskRouter
)

app.listen(3000,()=> {
    console.log(`Server is running on port ${app.get('port')}`);
})
