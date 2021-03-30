const router = require('express').Router();
const { user } = require('../controllers/user');

router.post('/create', user.CreateUser);
router.post('/login', user.loginUser);
router.get('/users', user.ListUser);

module.exports = router;
