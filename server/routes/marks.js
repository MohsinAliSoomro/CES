const router = require('express').Router();

const { marks } = require('../controllers/marks/index');

router.post('/create', marks.CreateMarks);
router.get('/marks', marks.ListMarks);
router.post('/marks/:subjectId/:studentId', marks.updateMarks);
router.post('/marks', marks.InsertMarks);
router.get('/marksStudent/:studentId', marks.StudentMarks);

module.exports = router;
