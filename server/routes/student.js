const router = require('express').Router();
const { student } = require('../controllers/student');

router.post('/create', student.createStudent);
router.get('/students', student.students);
router.get('/studentprogram/:id', student.studentProgram);
router.get('/student/:id', student.student);
router.delete('/student/:id', student.studentDelete);
router.put('/student/:id', student.studentUpdate);
module.exports = router;
