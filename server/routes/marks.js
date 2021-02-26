const router = require('express').Router();

const { marks } = require('../controllers/marks/index');

router.post('/create', marks.CreateMarks);
router.get('/marks', marks.ListMarks);
router.post('/marks/:subjectId', marks.updateMarks);

module.exports = router;
