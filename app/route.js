module.exports = function (app) {
    require('./routes/images.route')(app);
    require('./routes/users.route')(app);
    require('./routes/album.route')(app);
    require('./routes/tags.route')(app);
    require('./routes/image_tags.route')(app);
    require('./routes/image_albums.route')(app);
};
