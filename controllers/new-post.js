const User = require('../models/user');


module.exports = (req, res, next) => {
    const content = req.body.content;
    const user = req.body.username;
    
    User.findByPk(user)
        .then(user => {
            if (!user) {
                return res.status(404).end()
            }
            return user.createPost({content: content})
        })
        .then(post => {
            res.status(200).json({post: post});
        })
        .catch(err => {
            res.statusMessage = err;
            res.status(500).end();
        })
}