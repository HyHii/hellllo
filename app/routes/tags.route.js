/**
 * Created by bioz on 1/13/2017.
 */
// our components
const tagsService = require('../services/tags.service');

module.exports = function (app) {
    app.get('/api/v1/tags', tagsService.getAll);
    app.get('/api/v1/tags/:id', tagsService.getOne);
    app.post('/api/v1/tags', tagsService.create); 
    app.put('/api/v1/tags/:id', tagsService.update); 
    app.delete('/api/v1/tags/:id', tagsService.delete);
};
