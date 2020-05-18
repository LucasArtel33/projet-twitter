const router = require('express').Router();
const { ensureAuthenticated } = require('../config/guards.config');
const {signupForm, signup, uploadImg, userProfile, searchUsersList, followUser, unfollowUser} = require('../controller/users.controller');

router.get('/', searchUsersList);
router.get('/signup/form', signupForm);
router.get('/follow/:userId', followUser);
router.get('/unfollow/:userId', unfollowUser);
router.get('/:username', userProfile);
router.post('/signup', signup);
router.post('/update/img',ensureAuthenticated, uploadImg);

module.exports = router;