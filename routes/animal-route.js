const express = require('express');
const router = express.Router();

const animalController = require('../controllers/animal-controller');

router.get('/ping', animalController.ping);
router.post('/create', animalController.create);
router.get('/:id', animalController.details);
router.put('/:id/update', animalController.update);
router.delete('/:id/delete', animalController.delete);

module.exports = router;