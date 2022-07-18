import express from 'express';
import path from 'path';
import apiRouter from './api/api';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../../../mitaina-front/build')));
app.use(express.json());
app.use(cookieParser('secret'));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../../mitaina-front/build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
