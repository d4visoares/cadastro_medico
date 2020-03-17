const {Medico, Especialidade }= require('../models');

class MedicoController {
  async index(req, res) {
    try {
      const medicos = await Medico.findAll({
        include: {
          model: Especialidade,
          as: 'especialidades',
          through: {attributes: []}
        }
      });

      return res.json(medicos);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const medico = await Medico.findByPk(req.params.id, {
        include: {
          model: Especialidade,
          as: 'especialidades',
          through: {attributes: []}
        }
      });

      return res.json(medico);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const {especialidades, ...data} = req.body;
      let medico = await Medico.create(data);

      if(especialidades && especialidades.length > 0){
        medico.setEspecialidades(especialidades);
      }
      
      const response = await Medico.findByPk(medico.id, {
        include: {
          model: Especialidade,
          as: 'especialidades',
          through: {attributes: []}
        }
      })
      
      return res.status(201).json(response);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const medico = await Medico.findByPk(req.params.id);

      const {especialidades, ...data} = req.body;

      await medico.update(data);

      if(especialidades && especialidades.length > 0){
        medico.setEspecialidades(especialidades);
      }

      return res.json({ medico });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const medico = await Medico.findByPk(req.params.id);

      await medico.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new MedicoController();