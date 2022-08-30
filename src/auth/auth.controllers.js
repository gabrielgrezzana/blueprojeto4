const authServices = require('./auth.services');
const bcrypt = require('bcryptjs');

class AuthControllers {
  login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const foundUser = await authServices.findUserByEmail(email);

      if (!foundUser) {
        res.status(400).send({ message: 'Email não registrado' });
      } else {
        const verify = await bcrypt.compare(password, foundUser.password);

        const token = authServices.generateToken(foundUser._id);

        if (verify === true) {
          res.status(200).send({ token: token });
        } else {
          res.status(400).send({ message: 'Senha errada' });
        }
      }
    } catch (err) {
      res.status(400).send({ message: 'Erro no login' });
    }
  };
}

module.exports = authControllers = new AuthControllers();
