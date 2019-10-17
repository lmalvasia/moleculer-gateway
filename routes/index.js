import serviceBrokerParams from '../serviceBroker/params';
import { callBroker } from '../serviceBroker/middleware';

export default (app) => {
  app.use(
    '/api/:service/:action',
    serviceBrokerParams.base({ serviceBaseName: 'Test' }),
    callBroker);
}