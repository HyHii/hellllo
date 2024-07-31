const sequel = require('sequelize');
const mySequel = require('../utils/sequelize.util');

const users = mySequel.define('users', {
    user_id: {
        type: sequel.INTEGER(),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: sequel.STRING(255),
        unique: true,
        allowNull: false,
    },
    password: {
        type: sequel.STRING(255),
        allowNull: false,
    },
    email_address: {
        type: sequel.STRING(255),
        unique: true,
        allowNull: false,
    },
    full_name: {
        type: sequel.STRING(255),
        allowNull: true,
    },
    profile_picture: {
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
    tableName: 'users', // Table name
});

module.exports = users;
