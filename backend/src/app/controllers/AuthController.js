const UserRepository = require('../repositories/UserRepository');
const jwt = require('jsonwebtoken');

class AuthController {
  async index(req, res) {
    const { email, password } = req.body;

    const user = await UserRepository.findByEmailAndPassword(email, password);

    if (!user) {
      return res.status(404).json({ error: 'Usuario não encontrado' });
    }

    return res.json({
      user,
      token: jwt.sign(user, 'PRIVATEKEY'),
    });
  }

  async store(req, res) {
    console.log(req);
    console.log('entrou aq');

    const { email, password } = req.body;

    await UserRepository.create(email, password);

    return res.sendStatus(200);
  }
}

module.exports = new AuthController();
