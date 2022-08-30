const User = require("./users.model");

class UsersServices {
  createUsersService = async (body) => {
    return await User.create(body);
  };

  getAllUsersService = async () => {
    return await User.find();
  };

  findByUsername = async (username) => {
    return await User.findOne({ username: username });
  };

  findByEmail = async (email) => {
    return await User.findOne({ email: email });
  };
}

module.exports = usersServices = new UsersServices();
