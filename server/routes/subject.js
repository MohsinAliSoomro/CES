const router = require('express').Router();
const { subject } = require('../controllers/subject');

router.post('/create', subject.createSubject);
router.get('/subjects', subject.subjects);
router.get('/subject/:id', subject.subject);
router.delete('/subject/:id', subject.SubjectDelete);
router.post('/subject/:id', subject.subjectUpdate);
router.get('/subject/semester/:id', subject.subjectSemester);
module.exports = router;
