const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const images = mySequel.define('images', {
    image_id: {
        type: sequel.INTEGER(),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    image_title: {
        type: sequel.STRING(255),
        allowNull: true,
    },
    image_description: {
        type: sequel.STRING(255),
        allowNull: true,
    },
    file_size_kb: {
        type: sequel.INTEGER,
        allowNull: true,
    },
    user_id: {
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
    tableName: 'images', // Table name
});

module.exports = images;
