const Sequelize = require('sequelize');
const sequelize = require('./index');

const Post = sequelize.define('post', {
    _id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    broadcasts: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
    }
});


module.exports = Post;