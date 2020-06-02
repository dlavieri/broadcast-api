const User = require('../models/user');
const Post = require('../models/post');

module.exports = (req, res, next) => {
    let username = req.params.username;

    User.findAll({where: {username: username}, include: [{model: Post}] })
        .then(users => {
            return res.json(users[0])
        })
        .catch(err => res.status(500).json({error: err}))
}