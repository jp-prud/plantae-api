const jwt = require('jsonwebtoken');
const { promisify } = require('util');

class AuthMiddleware {
  async authenticate(request, response, next) {
    const { authorization } = request.headers;

    if (!authorization) {
      return response.sendStatus(401);
    }

    const [, token] = authorization.split(' ');

    try {
      await promisify(jwt.verify)(token, 'PRIVATEKEY');

      return next();
    } catch (err) {
      return response.sendStatus(401);
    }
  }
}

module.exports AuthMiddleware;
