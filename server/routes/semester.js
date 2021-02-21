const router = require('express').Router();
const { semester } = require('../controllers/semester');

router.post('/create', semester.createSemester);
router.get('/semesters', semester.semesters);
router.get('/semester/:id', semester.semester);
router.delete('/semester/:id', semester.semesterDelete);
router.post('/semester/:id', semester.semesterUpdate);
router.get('/semester/program/:id', semester.semesterProgram);
module.exports = router;
