const User = require("../users/users.model");
const jwt = require("jsonwebtoken");

class AuthServices {
  findUserByEmail = async (email) => {
    return await User.findOne({ email: email }).select("+password");
  };

  findUserById = async (userId) => {
    return await User.findOne({ _id: userId }).select("+password");
  };

  verifyPassword = async (password, user) => {
    if (user.password === password) {
      return true;
    } else {
      return false;
    }
  };

  generateToken = (userId) => jwt.sign({ _id: userId }, process.env.SECRET, { expiresIn: 85000 });
}

module.exports = authServices = new AuthServices();
