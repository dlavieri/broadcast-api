const express = require('express');
const signupRoute = require('../controllers/signup');
const newPostRoute = require('../controllers/new-post');
const broadcastRoute = require('../controllers/broadcast-post');
const replyRoute = require('../controllers/reply-post');
const deleteRoute = require('../controllers/delete-post');
const allPostsRoute = require('../controllers/all-posts');

const router = express.Router()

router.get('/home-posts', allPostsRoute);

router.get('/user-posts/:username');

router.get('/hashtag-posts/:hashtag');

router.post('/broadcast-post/:post_id', broadcastRoute);

router.post('/new-post', newPostRoute);

router.post('/delete-post/:post_id', deleteRoute)

router.post('/reply/:post-id', replyRoute)

router.post('/signup', signupRoute);

router.post('/login');

module.exports = router;