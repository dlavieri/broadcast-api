const Sequelize = require('sequelize');
const sequelize = require('./index');

const Reply = sequelize.define('reply', {
    _id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});


module.exports = Reply;