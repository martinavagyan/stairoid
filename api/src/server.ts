import * as express from 'express';
import * as cookieParser from "cookie-parser";
import * as bodyParser from 'body-parser';
import * as morgan from "morgan";
import * as Dontenv from 'dotenv';
import * as cors from 'cors';
import Router from './api';
import MongooseService from './api/datasources/Mongoose.Service';

export default class Server {
  public static boot() {
    Dontenv.config();

    const PORT = process.env.PORT || 3000;
    const API = Server.startExpressApi();

    MongooseService.connect();
    API.use('/api', Router);
    
    API.listen(PORT);
    console.info('RESTful API server started on: ' + PORT);
    return API;
  }  

  private static startExpressApi() {
    const API = express();
    API.use(morgan('dev'));
    API.use(cookieParser());
    API.use(bodyParser.urlencoded({ extended: true }));
    API.use(cors());
    API.use(bodyParser.json());
    return API;
  }
}
