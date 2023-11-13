/**
 * Setup express server.
 */

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';

import 'express-async-errors';

import ShopsRouter from '@src/routes/shops';
import ProductRouter from '@src/routes/products';
import UserRouter from '@src/routes/users';

import EnvVars from '@src/constants/EnvVars';

import { NodeEnvs } from '@src/constants/misc';


// **** Variables **** //

const app = express();


// **** Setup **** //

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(EnvVars.CookieProps.Secret));

// Show routes called in console during development
if (EnvVars.NodeEnv === NodeEnvs.Dev.valueOf()) {
  app.use(morgan('dev'));
}

if (EnvVars.NodeEnv === NodeEnvs.Production.valueOf()) {
  app.use(helmet());
}

// Add APIs, must be after middleware
app.use('/shops', ShopsRouter);
app.use('/products', ProductRouter);
app.use('/users', UserRouter);


export default app;
