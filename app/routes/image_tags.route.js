/**
 * Created by bioz on 1/13/2017.
 */
// our components
const image_tagsService = require('../services/image_tags.service');

module.exports = function (app) {
    app.get('/api/v1/image_tags', image_tagsService.getAll);
    app.get('/api/v1/image_tags/:id', image_tagsService.getOne);
    app.put('/api/v1/image_tags/:id', image_tagsService.update);
    app.delete('/api/v1/image_tags/:id', image_tagsService.delete);
    app.post('/api/v1/image_tags', image_tagsService.create);
};
