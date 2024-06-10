
import dotenv from 'dotenv';
import express, {Express} from 'express';
import helmet from 'helmet';
import path from 'path';
import { authenticateUser, limiter } from './middleware';
import { router as userRouter } from './user';

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;
const version = process.env.API_VERSION ?? 0;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '4mb', }));
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.static('public'))

app.use(limiter);

app.use(authenticateUser);

app.get('/', (req, res) => {
    res.json({ api: `v${version}` });
})

app.use('/user', userRouter);

app.listen(port, () => {
console.log(`[server]: Server is running at http://localhost:${port}`);
});

module.exports = app;