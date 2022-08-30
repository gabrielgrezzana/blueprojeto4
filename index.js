require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDatabase = require('./src/database/database');

const authRoutes = require('./src/auth/auth.routes');
const charactersRoutes = require('./src/characters/characters.routes');
const usersRoutes = require('./src/users/users.routes');

connectToDatabase();
app.use(cors());
app.use(express.json());

const swagger = require('swagger-ui-express');
const swaggerDocs = require('./src/docs/swagger.json');
app.use('/docs', swagger.serve, swagger.setup(swaggerDocs));

app.use('/auth', authRoutes);
app.use('/characters', charactersRoutes);
app.use('/users', usersRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Running at port ${port}`);
});
