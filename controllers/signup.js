const bcrypt = require('bcryptjs');

const User = require('../models/user');

module.exports = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    User.findByPk(username)
        .then(user => {
            if (user) {
                // send error that username already is in use
                res.status(303).end();
            }
            // encrypt password
            return bcrypt.hash(password, 12)
        })
        .then(encryptedPass => {
            // create new user with encrypted password
            return User.create({username: username, password: encryptedPass});
        })
        .then(() => {
            res.status(200).end();
        })
        .catch(err => {
            res.statusMessage = err;
            res.status(500).end();
        });
}