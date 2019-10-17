import httpStatus from 'http-status-codes';
import serviceBroker from './client';
// import { ServiceNotFoundError, MoleculerClientError } from 'moleculer';

export const callBroker = async (req, res) => {
  const { actionName, params } = req.serviceBrokerParams;
  if (!actionName) {
    res.sendSatatus(404)
    return null;
  }
  try {
    const paramsForBroker = { 
      payload: req.body,
      ...params,
    }
    const actionResult = await serviceBroker.call(actionName, paramsForBroker);
    if (!actionResult) {
      return res.sendStatus(httpStatus.OK);
    }
    return res.json(actionResult);
  } catch (error) {
    console.log('error: ', error);
  }
}