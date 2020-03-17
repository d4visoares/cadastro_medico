const { Router } = require('express');
const EspecialidadeController = require('../app/controllers/EspecialidadeController');

const routes = Router();

routes.get('/especialidades', EspecialidadeController.index);
routes.get('/especialidades/:id', EspecialidadeController.show);
routes.post('/especialidades', EspecialidadeController.store);
routes.put('/especialidades/:id', EspecialidadeController.update);
routes.delete('/especialidades/:id', EspecialidadeController.destroy);

module.exports = routes;