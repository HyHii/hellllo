const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const albums = mySequel.define('albums', {
    album_id: {
        type: sequel.INTEGER(),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    owner_user_id: {
        type: sequel.INTEGER,
        allowNull: true,
    },
    album_title: {
        type: sequel.STRING(255),
        allowNull: false,
    },
    album_description: {
        type: sequel.STRING(255),
        allowNull: true,
    },
    cover_image_id: {
        type: sequel.INTEGER,
        allowNull: true,
    },
    created_at: {
        type: sequel.DATE,
        allowNull: true,
        defaultValue: sequel.NOW
    },
    updated_at: {
        type: sequel.DATE,
        allowNull: true,
        defaultValue: sequel.NOW
    },
}, {
    timestamps: false, // Disable automatic creation of timestamps fields
    paranoid: true, // Enable soft deletes
    freezeTableName: true, // Disable pluralization of table name
    tableName: 'albums', // Table name
});

module.exports = albums;
