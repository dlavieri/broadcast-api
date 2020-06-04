const User = require('../models/user');

module.exports = (req, res, next) => {
    let username = req.params.username;
    let name = req.body.name;
    let email = req.body.email;
    let about = req.body.about;
    let img = req.body.img

    User.findByPk(username)
    .then(user => {
        console.log(user)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
}