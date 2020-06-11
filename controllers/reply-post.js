const Post = require('../models/post');

module.exports = (req, res, next) => {
    const post = req.params.post_id;
    const content = req.body.content;
    const user = req.body.username;

    Post.findByPk(post)
        .then(post => {
            post.createReply({content: content, user: user});
        })
        .then(() => {
            res.status(200).end();
        })
        .catch(err => {
            res.statusMessage = err;
            res.status(500).end();
        })
}