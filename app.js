const express = require('express');
const bodyParser = require('body-parser');

const User = require('./models/user');
const Trend = require('./models/trend');
const TrendPost = require('./models/trend-post');
const Post = require('./models/post');
const Reply = require('./models/reply');
const sequelize = require('./models/index');

const routes = require('./routes/routes');
// instantiate express
const app = express();
app.use(bodyParser.json());
// set CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
// add routes
app.use(routes);
// establish database relationships
User.hasMany(Post, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Reply, { constraints: true, onDelete: 'CASCADE' });
Post.belongsTo(User);
Reply.belongsTo(User);
Post.hasMany(Reply, { constraints: true, onDelete: 'CASCADE '});
Reply.belongsTo(Post);
Post.belongsToMany(Trend, { through: TrendPost });

// sync database, listen on port
sequelize.sync({force: true})
    .then(() => {
        app.listen(process.env.PORT || 8080);
        console.log('app listening on port 8080');
    })
    .catch(err => {
        console.log('Error: ' + err);
    })