/**
 * Created by bioz on 1/13/2017.
 */
// our components
const albumService = require('../services/album.service');

module.exports = function (app) {
    app.get('/api/v1/album', albumService.getAll);
    app.get('/api/v1/album/:id', albumService.getOne);
    app.post('/api/v1/album', albumService.create); 
    app.put('/api/v1/album/:id', albumService.update); 
    app.delete('/api/v1/album/:id', albumService.delete);
};