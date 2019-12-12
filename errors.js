exports.routeError = (req, res) => {
  res.status(404).send({ msg: 'route not found' });
};

exports.methodNotFound = (req, res) => {
  res.status(405).send({ msg: 'method not allowed' });
};

exports.serverError = (err, req, res, next) => {
  res.status(500).send({
    msg: 'internal server error'
  });
};
