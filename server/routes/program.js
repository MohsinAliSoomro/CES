const  router  = require('express').Router();

const {pro} = require('../controllers/programs/index.js')


router.post('/create', pro.CreateProgram)
router.get('/list', pro.ListProgram)

module.exports = router;    