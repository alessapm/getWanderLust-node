const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/:city', controller.indexGetty);
router.get('/:city/attractions', controller.indexYelp);
router.post('/:user_id', controller.create);
router.get('/:user_id', controller.show);

//might want update for the priority?
router.put('/:user_id/:explore_id', controller.update);

router.delete('/:user_id/:explore_id', controller.destroy);

module.exports = router;
