const router = require("express").Router();
const authControllers = require("./auth.controllers");

router.post("/login", authControllers.login);

module.exports = router;
