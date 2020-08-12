import express, { Application } from 'express';
import { routes } from './routes';

// Boot express
export const app: Application = express();

// Application routing
routes(app);
