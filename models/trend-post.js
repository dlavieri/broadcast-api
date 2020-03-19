const Sequelize = require('sequelize');
const sequelize = require('./index');

const TrendPost = sequelize.define('trendpost', {
    _id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
    }
});

module.exports = TrendPost;