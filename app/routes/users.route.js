/**
 * Created by bioz on 1/13/2017.
 */
// our components
const userService = require('../services/users.service');

module.exports = function (app) {
    app.get('/api/v1/users', userService.getAll);
    app.get('/api/v1/users/:id', userService.getOne);
    app.post('/api/v1/users', userService.create); 
    app.put('/api/v1/users/:id', userService.update); 
    app.delete('/api/v1/users/:id', userService.delete);
};
