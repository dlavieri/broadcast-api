const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

module.exports = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    // locate user
    User.findByPk(username)
        .then(user => {
            if (!user) {
                return res.status(404).json({error: "Username not found"})
            }
            return bcrypt.compare(password, user.password)
        })
        .then(isEqual => {
            if (!isEqual) {
                return res.status(500).json({error: "Incorrect Password"})
            }
            const token = jwt.sign({user: username}, "broadcastsecret", {expiresIn: "1h"});
            return res.status(200).json({token: token, user: username})
        })
        .catch(err => {
            res.status(503).json({error: err});
        })
}