const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Rotas de Sessão
routes.post('/session', SessionController.create);

// Rotas da ONG
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Rota de Ong
routes.get('/profile', ProfileController.index);

// Rotas de Incidentes
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;