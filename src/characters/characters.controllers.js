const charactersServices = require('./characters.services');

class CharactersControllers {
  createCharactersController = async (req, res) => {
    try {
      const { user, name, imageUrl } = req.body;

      const findByName = await charactersServices.findByNameService(name);

      if (findByName) {
        res.status(400).send({ message: 'Nome ja foi registrado' });
      } else {
        const created = await charactersServices.createCharactersService({
          user,
          name,
          imageUrl,
        });
        if (!created) {
          res.status(400).send({ message: 'Error de criação' });
        } else {
          res.status(201).send(created);
        }
      }
    } catch (err) {
      res.status(400).send({ message: 'Error de criação' });
    }
  };

  getAllCharactersController = async (req, res) => {
    try {
      const limit = req.query.limit;
      const offset = req.query.offset;
      const characterList = await charactersServices.getAllCharactersService(
        limit,
        offset,
      );
      if (!characterList || characterList.length === 0) {
        res.status(404).send({ message: 'Personagem não encontrado' });
      } else {
        res.status(200).send(characterList);
      }
    } catch (err) {
      res.status(400).send({ message: 'Erro ao pegar personagem' });
    }
  };

  findByIdController = async (req, res) => {
    try {
      const foundChar = await charactersServices.findByIdService(req.params.id);
      if (!foundChar || foundChar.length === 0) {
        res.status(404).send({ message: 'Id não encontrado' });
      } else {
        res.status(200).send(foundChar);
      }
    } catch (err) {
      res.status(400).send({ message: 'Erro ao encontrar Id' });
    }
  };

  updateCharactersController = async (req, res) => {
    try {
      const id = req.params.id;
      const { name, imageUrl } = req.body;
      const update = await charactersServices.updateCharactersService(id, {
        name,
        imageUrl,
      });
      if (!update) {
        console.log('ola');
        res.status(404).send({ message: 'Id não encontrado' });
      } else {
        res.status(200).send(update);
      }
    } catch (err) {
      res.status(400).send({ message: 'Erro ao atualizar o personagem' });
    }
  };

  deleteCharacterController = async (req, res) => {
    try {
      const deleatedChar = await charactersServices.deleteCharacterService(
        req.params.id,
      );
      if (!deleatedChar) {
        res.status(400).send({ message: 'Id não encontrado' });
      } else {
        res.status(200).send(deleatedChar);
      }
    } catch (err) {
      res.status(400).send({ message: 'Erro ao deleter personagem' });
    }
  };

  searchCharactersController = async (req, res) => {
    try {
      const name = req.query.name;
      const searchedChar = await charactersServices.searchCharactersService(
        name,
      );
      if (!searchedChar) {
        throw new Error('Nome não encontrado');
      }
      res.status(200).send(searchedChar);
    } catch (err) {
      res.status(404).send({ message: 'Erro ao encontrar personagem' });
    }
  };
}

module.exports = charactersControllers = new CharactersControllers();
