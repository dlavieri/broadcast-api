const Post = require('../models/post');
const Reply = require('../models/reply');

module.exports = (req, res, next) => {

    Post.findAll({ order: [['updatedAt', 'DESC']], include: [{model: Reply}]})
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => {
            res.statusMessage = err;
            res.status(500).end()
        })
}