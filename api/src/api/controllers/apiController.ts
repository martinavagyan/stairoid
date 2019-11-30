import {Model} from 'mongoose';
import * as testModel from '../models/testModel';
import TestController from './testController';

const testCtrl = new TestController<Model<testModel.ITestModel>>(testModel.default);

class ApiController {
    static health_check(req: any, res: any, next: any) {
        res.sendStatus(200);
    };

    static test_get (req: any, res: any) {
        testCtrl.getAll(req, res);
    };

    static test_post(req: any, res: any) {
        testCtrl.insert(req, res);
    };

    static test_delete (req: any, res: any) {
        testCtrl.delete(req, res);
    };
};

export default ApiController;