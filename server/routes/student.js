

const router = require('express').Router();
const {student}=require('../controllers/student')
router.post('/create', student.createStudent)

module.exports = router;