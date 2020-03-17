const { Especialidade } = require('../models');

class EspecialidadeController{

  async index(req, res){
    try {
      const especialidades = await Especialidade.findAll();
      if(especialidades == 0) res.status(500).json({err: "Lista Vazia"});

      return res.json(especialidades);
    } catch (error) {
      return res.status(400).json({error: error.message});
    }
  }

  async show(req, res){
    const id = req.params.id;

    try {
      const especialidade = await Especialidade.findByPk(id);
      return res.json(especialidade);
    } catch (error) {
      res.status(400).json({err: error.message});
    }
  }

  async store(req, res){
    try {
      const especialidade = await Especialidade.create(req.body);

      return res.status(201).json(especialidade);
    } catch (error) {
      return res.status(400).json({err: error.message});
    }

  }

  async update(req, res){
    try {
      const especialidade = await Especialidade.findByPk(req.params.id);
      await especialidade.update(req.body);

      return res.json({especialidade});
    } catch (error) {
      return res.status(400).json({err: error.message});
    }
  }

  async destroy(req, res){
    try {
      const especialidade = await Especialidade.findByPk(req.params.id);

      await especialidade.destroy();
      return res.status(204).json();
    } catch (error) {
      return res.status(400).json({err: error.message});
    }
  }

}

module.exports = new EspecialidadeController();