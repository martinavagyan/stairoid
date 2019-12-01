import ApiController from '../controllers/apiController';

class RoutesService {
    public static connect(api: any) {
        api.route('/api/test/').get(ApiController.test_get);
        api.route('/api/test/').post(ApiController.test_post);
        api.route('/api/test/:id').delete(ApiController.test_delete);
        api.route('/').get(ApiController.health_check);
        api.route('/**').get(ApiController.health_check);
    }
};

export default RoutesService;
