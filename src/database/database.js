const mongoose = require('mongoose');

const connectToDatabase = () => {
  console.log('Conectando com o MongoDB...');
  mongoose
    .connect(String(process.env.MONGO_URI), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB conectado com sucesso!'))
    .catch((error) => {
      console.log(`Erro ao conectar com o MongoDB: ${error}`);
    });
};

module.exports = connectToDatabase;
