const mongoose = require('mongoose');

module.exports = connectToDatabase = () => {
  mongoose
    .connect(String(process.env.MONGO_URI), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connect to Database'))
    .catch((err) => console.error(`Error connecting to Database: ${err}`));
};
