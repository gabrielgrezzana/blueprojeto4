const usersServices = require('./users.services');
const bcrypt = require('bcryptjs');

class UsersControllers {
  createUsersController = async (req, res) => {
    try {
      const { name, username, email, password, photo } = req.body;
      const findByEmail = await usersServices.findByEmail(email);
      const findByUsername = await usersServices.findByUsername(username);
      const encryptePassword = await bcrypt.hash(password, 8);

      if (findByEmail) {
        res.status(400).send({ message: ' Email já registrado' });
      } else if (findByUsername) {
        res.status(400).send({ message: ' Username já registrado' });
      } else {
        const created = await usersServices.createUsersService({
          name,
          username,
          email,
          password: encryptePassword,
          photo,
        });
        if (!created) {
          res.statys(400).send({ message: 'Erro ao criar usuário' });
        } else {
          res.status(201).send(created);
        }
      }
    } catch (err) {
      res.status(400).send({ message: 'Erro ao criar usuario' });
    }
  };

  getAllUsersController = async (req, res) => {
    try {
      const userList = await usersServices.getAllUsersService();
      if (!userList || userList.length === 0) {
        res.status(404).send({ message: 'Usuario não encontrado' });
      } else {
        res.status(200).send(userList);
      }
    } catch (err) {
      res.status(404).send({ message: 'Usuario não encontrado' });
    }
  };
}
module.exports = usersControllers = new UsersControllers();
