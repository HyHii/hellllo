const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const image_tags = mySequel.define('image_tags', {
    image_id: {
        type: sequel.INTEGER(),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    tag_id: {
        type: sequel.INTEGER(),
        autoIncrement: true,
        allowNull: false,
    },
    tagged_at: {
        type: sequel.DATE,
        allowNull: true,
        defaultValue: sequel.NOW
    },
}, {
    timestamps: false, // Disable automatic creation of timestamps fields
    paranoid: true, // Enable soft deletes
    freezeTableName: true, // Disable pluralization of table name
    tableName: 'image_tags', // Table name
});

module.exports = image_tags;
