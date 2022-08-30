const router = require('express').Router();
const usersControllers = require('./users.controllers');
const authMiddleware = require('../auth/auth.middleware');

router.post('/create', usersControllers.createUsersController);
router.get('/', authMiddleware, usersControllers.getAllUsersController);

module.exports = router;
