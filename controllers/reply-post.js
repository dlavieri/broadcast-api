const Post = require('../models/post');

module.exports = (req, res, next) => {
    const post = req.params.post_id;
    const content = req.body.content;
    const user = req.body.username;

    Post.findByPk(post)
        .then(post => {
            return post.createReply({content: content, user: user});
        })
        .then(reply => {
            res.status(200).json({reply: reply});
        })
        .catch(err => {
            res.statusMessage = err;
            res.status(500).end();
        })
}