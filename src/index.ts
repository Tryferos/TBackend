
import dotenv from 'dotenv';
import express, {Express} from 'express';
import helmet from 'helmet';
import { authenticateUser, limiter } from './middleware';
import { router as globalRouter } from './routes';

dotenv.config();

// *import of database must be after dotenv decleration in order for the .env file to be loaded
import  './database';

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '4mb', }));
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.static('public'))

app.use(limiter);

app.use(authenticateUser);

app.use('/', globalRouter);

app.listen(port, async() => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

module.exports = app;