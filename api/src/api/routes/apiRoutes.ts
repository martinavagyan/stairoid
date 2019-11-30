import ApiController from '../controllers/apiController';


const Routes = (app: any) => {
    app.route('/').get(ApiController.health_check);

    /**
     * Testing routes
     * */
    app.route('/api/test/').get(ApiController.test_get);
    app.route('/api/test_no_auth/').get( ApiController.test_get);
    app.route('/api/test/').post(ApiController.test_post);
    app.route('/api/test/:id').delete(ApiController.test_delete);
    app.route('/**').get(ApiController.health_check);
};

export default Routes;
