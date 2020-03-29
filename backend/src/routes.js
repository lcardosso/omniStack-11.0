const express = require('express');

const OngCOntroller = require('./controllers/OngCOntroller');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session',SessionController.create)

routes.get('/ongs', OngCOntroller.index);
routes.post('/ongs', OngCOntroller.create);

routes.get('/profile',ProfileController.index);

routes.get('/incidents',IncidentsController.index);
routes.post('/incidents',IncidentsController.create);
routes.delete('/incidents/:id',IncidentsController.delete);

module.exports = routes;