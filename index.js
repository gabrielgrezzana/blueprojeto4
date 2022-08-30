require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./src/auth/auth.routes');
const charactersRoutes = require('./src/characters/characters.routes');
const usersRoutes = require('./src/users/users.routes');
const connectToDatabase = require('./src/database/database');
connectToDatabase();
app.use(cors());
app.use(express.json());

const swagger = require('swagger-ui-express');

const swaggerDocs = require('./src/docs/swagger.json');

app.use('/docs', swagger.serve, swagger.setup(swaggerDocs));

app.use('/auth', authRoutes);
app.use('/characters', charactersRoutes);
app.use('/users', usersRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
