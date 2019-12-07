import * as express from 'express';
import * as cookieParser from "cookie-parser";
import * as bodyParser from 'body-parser';
import * as morgan from "morgan";
import * as Dontenv from 'dotenv';
import RouterService from './api/router/Router.Service';
import MongooseService from './api/datasources/Mongoose.Service';

Dontenv.config();

const API = express();
const PORT = process.env.PORT || 3000;

API.use(morgan('dev'));
API.use(cookieParser());
API.use(bodyParser.urlencoded({ extended: true }));
API.use(bodyParser.json());

MongooseService.connect();
RouterService.connect(API);

API.listen(PORT);
console.info('RESTful API server started on: ' + PORT);
