const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const image_albums = mySequel.define('image_albums', {
    image_id: {
        type: sequel.INTEGER(),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    album_id: {
        type: sequel.INTEGER(),
        autoIncrement: true,
        allowNull: false,
    },
    added_at: {
        type: sequel.DATE,
        allowNull: true,
        defaultValue: sequel.NOW
    },
}, {
    timestamps: false, // Disable automatic creation of timestamps fields
    paranoid: true, // Enable soft deletes
    freezeTableName: true, // Disable pluralization of table name
    tableName: 'image_albums', // Table name
});

module.exports = image_albums;
