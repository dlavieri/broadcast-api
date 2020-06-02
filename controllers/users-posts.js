const User = require('../models/user');
const Post = require('../models/post');

module.exports = (req, res, next) => {
    let username = req.params.username;
    
    let userData;
    User.findByPk(username)
        .then(user => {
            userData = user;
            return Post.findAll({where: { userUsername: username}, order: [[ 'createdAt', 'DESC' ]]})
        })
        .then(posts => {
            res.json({user: userData, posts: posts})
        })
        .catch(err => res.status(500).json({error: err}))
}