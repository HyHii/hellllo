/**
 * Created by bioz on 1/13/2017.
 */
// our components
const imagesService = require('../services/images.service');

module.exports = function (app) {
    app.get('/api/v1/images', imagesService.getAll);
    app.get('/api/v1/images/:id', imagesService.getOne);
    app.post('/api/v1/images', imagesService.create); 
    app.put('/api/v1/images/:id', imagesService.update); 
    app.delete('/api/v1/images/:id', imagesService.delete);
};
