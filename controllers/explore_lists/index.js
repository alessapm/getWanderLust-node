const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/:city', controller.indexGetty);
router.get('/attractions/:city', controller.indexYelp);

router.post('/list/:user_id', controller.create);
router.get('/list/:user_id', controller.show);

//might want update for the priority?
// router.put('/list/:user_id/:explore_id', controller.update);

router.delete('/list/d/:explore_id', controller.destroy);

module.exports = router;
