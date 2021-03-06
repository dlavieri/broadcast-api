const Post = require('../models/post');

module.exports = (req, res, next) => {
    const post = req.params.post_id;

    Post.findByPk(post)
        .then(post => {
            return post.destroy();
        })
        .then(() => {
            res.status(200).end();
        })
        .catch(err => {
            res.statusMessage = err;
            res.status(500).end();
        })
}