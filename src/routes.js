const { Router }  = require('express');
const OngController = require('./controllers/OngController')
const SearchController = require('./controllers/SearchController')

const routes = Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);
routes.get('/search', SearchController.index);
routes.delete('/delete', OngController.destroy);
routes.put('/edit', OngController.update);

module.exports = routes;