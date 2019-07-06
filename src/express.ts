import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';

export default function (): Application {
	const app: Application = express();
	app.use(compress());
	app.use(helmet());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cors());
	app.get(
		'/',
		(req: Request, res: Response): Response => {
			return res.status(200).json({ message: 'back ready' });
		}
	);

	return app;
}
