import { ServiceBroker } from 'moleculer';
import config from '../moleculer.config';

const broker = new ServiceBroker(config);

if (!process.env.NODE_ENV) {
  broker.repl();
}

export default {
  start: async () => broker.start(),
  emit: async (eventName, payload) => broker.emit(eventName, payload),
  stop: () => broker.stop(),
  call: async (actionName, params, opts) => broker.call(actionName, params, opts)
}