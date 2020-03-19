const Sequelize = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    about: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    img: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

module.exports = User;