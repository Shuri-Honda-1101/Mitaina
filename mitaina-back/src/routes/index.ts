import express, { Request, Response } from 'express';
import path from 'path';
import prisma from '../lib/prisma';
import apiRouter from './api/api';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../../mitaina-front/build')));
app.use(express.json());
app.use(cookieParser('secret'));

app.get('/users', async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();
	return res.json(users);
});

app.use('/api', apiRouter);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../../mitaina-front/build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
