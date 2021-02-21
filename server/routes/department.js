const  router  = require('express').Router();

const {dep} = require('../controllers/departments/index.js')


router.post('/create', dep.CreateDepartment)
router.get('/department', dep.ListDepartment)

module.exports = router;