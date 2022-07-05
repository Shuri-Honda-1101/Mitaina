import express, { Request, Response } from 'express';
import path from 'path';
import prisma from './src/lib/prisma';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../mitaina-front/build')));

app.get('/users', async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();
	return res.json(users);
});

app.get('/api', (req, res) => {
	res.json({ message: 'Hello World!' });
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
