const Post = require('../models/post');

module.exports = (req, res, next) => {

    Post.findAll()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => {
            res.statusMessage = err;
            res.status(500).end()
        })
}