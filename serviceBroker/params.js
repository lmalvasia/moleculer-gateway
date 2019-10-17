const base = (options) => (req, res, next) => {
  const { service, action } = req.params;
  req.serviceBrokerParams = {
    actionName: `${options.serviceBaseName}.${service}.${action}`,
    params: {
      service,
      action,
      ...req.params
    }
  };
  return next();
}

export default {
  base
}