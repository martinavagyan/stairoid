import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cookieParser from "cookie-parser";
import * as morgan from "morgan";
import Routes from './api/routes/apiRoutes';

const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const db: string = String((process.env.NODE_ENV === 'production') ? process.env.PROD_DB : process.env.DEV_DB);

mongoose.connect(db, {
    useMongoClient: true,
    promiseLibrary: global.Promise,
});

/**
 * Set up our express application
 * */
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

Routes(app); // Set up routes
app.listen(port);
console.log('RESTful API server started on: ' + port);
