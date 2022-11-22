const router = require('express').Router();
const userRoutes = require('./userRoutes');
const freindsRoutes = require('./freindsRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');
const reactionsRoutes = require('./reactionsRoutes');

router.use('/users', userRoutes);
router.use('/api/users/:userId/friends/:friendId', freindsRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/api/thoughts/:thoughtId/reactions', reactionsRoutes);

module.exports = router;
