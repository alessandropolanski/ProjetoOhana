const { Router }  = require('express');
const OngController = require('./controllers/OngController')
const SearchController = require('./controllers/SearchController')

const routes = Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/search', SearchController.index)


module.exports = routes;