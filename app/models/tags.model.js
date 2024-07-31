const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const tags = mySequel.define('tags', {
    tag_id: {
        type: sequel.INTEGER(),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    tag_name: {
        type: sequel.STRING(255),
        unique: true,
        allowNull: false,
    },
    tag_description: {
        type: sequel.STRING(255),
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
    tableName: 'tags', // Table name
});

module.exports = tags;
