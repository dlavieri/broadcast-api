const Sequelize = require('sequelize');
const sequelize = require('./index');

const Trend = sequelize.define('trend', {
    _hashtag: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    }
});


module.exports = Trend;