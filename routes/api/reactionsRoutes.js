const router = require('express').Router();
const {
  createReaction,
  deleteReaction,
} = require('../../controllers/');

// /api/thoughts/:thoughtId/reactions
router.route('/').post(createReaction).delete(deleteReaction);

module.exports = router;
