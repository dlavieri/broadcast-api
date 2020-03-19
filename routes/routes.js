const express = require('express');
const signupRoute = require('../controllers/signup');

const router = express.Router()

router.get('/home-posts');

router.get('/user-posts/:username');

router.get('/hashtag-posts/:hashtag');

router.post('/broadcast-post/:post_id');

router.post('/signup', signupRoute);

router.post('/login');

module.exports = router;