const router = require('express').Router();
const charactersControllers = require('./characters.controllers');
const authMiddleware = require('../auth/auth.middleware');

//search ta errado.
router.get(
  '/search',
  authMiddleware,
  charactersControllers.searchCharactersController,
);

//ok
router.post(
  '/create',
  authMiddleware,
  charactersControllers.createCharactersController,
);

router.get(
  '/',
  authMiddleware,
  charactersControllers.getAllCharactersController,
);

//ok
router.get(
  '/find/:id',
  authMiddleware,
  charactersControllers.findByIdController,
);

//ok
router.put(
  '/update/:id',
  authMiddleware,
  charactersControllers.updateCharactersController,
);

//ok
router.delete(
  '/delete/:id',
  authMiddleware,
  charactersControllers.deleteCharacterController,
);

module.exports = router;
