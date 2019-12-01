import * as express from 'express';
import * as cookieParser from "cookie-parser";
import * as bodyParser from 'body-parser';
import * as morgan from "morgan";
import RoutesService from './api/routes/routes-service';
import * as Dontenv from 'dotenv';
import DbService from './services/db-service';


Dontenv.config();

const API = express();
const PORT = process.env.PORT || 3000;

API.use(morgan('dev')); // log every request to the console
API.use(cookieParser());
API.use(bodyParser.urlencoded({ extended: true }));
API.use(bodyParser.json());

DbService.connect();
RoutesService.connect(API);

API.listen(PORT);
console.info('RESTful API server started on: ' + PORT);
