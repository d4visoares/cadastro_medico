const { Router } = require('express');
const MedicoController = require('../app/controllers/MedicoController');

const routes = Router();

routes.get('/medicos', MedicoController.index);

routes.get('/medicos/:id', MedicoController.show);

routes.post('/medicos', MedicoController.store);

routes.put('/medicos/:id', MedicoController.update);

routes.delete('/medicos/:id', MedicoController.destroy);

module.exports = routes;