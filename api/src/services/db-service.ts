import * as mongoose from 'mongoose';
const PROD_VAR: string = 'production';

class DbService {
  public static getUri(): string {
    return String((process.env.NODE_ENV === PROD_VAR) ? process.env.PROD_DB : process.env.DEV_DB);
  }

  public static connect() {
    console.debug(DbService.getUri());
    mongoose.connect(DbService.getUri(), {
      useMongoClient: true,
      promiseLibrary: global.Promise,
    });
  }
}

export default DbService;