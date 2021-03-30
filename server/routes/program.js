const router = require('express').Router();

const { pro } = require('../controllers/programs/index.js');

router.post('/create', pro.CreateProgram);
router.get('/programs', pro.ListProgram);
router.put('/programUpdate/:id', pro.UpdateProgram);
router.delete('/programDelete/:id', pro.deleteProgram);

module.exports = router;
