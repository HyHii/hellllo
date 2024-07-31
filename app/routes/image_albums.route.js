/**
 * Created by bioz on 1/13/2017.
 */
// our components
const image_albumService = require('../services/image_albums.service');

module.exports = function (app) {
    app.get('/api/v1/image_album', image_albumService.getAll);
    app.get('/api/v1/image_album/:id', image_albumService.getOne);
    app.put('/api/v1/image_album/:id', image_albumService.update);
    app.delete('/api/v1/image_album/:id', image_albumService.delete);
    app.post('/api/v1/image_album', image_albumService.create);
};
