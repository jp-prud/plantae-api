import jwt from 'jsonwebtoken';
import { promisify } from 'util';

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

export default AuthMiddleware;
