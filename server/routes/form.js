const router = require('express').Router();

const { form } = require('../controllers/form/index');

router.post('/create', form.CreateForm);
router.get('/forms', form.ListForm);

module.exports = router;
