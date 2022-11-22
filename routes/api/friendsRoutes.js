const router = require('express').Router();
const {
  createFriend,
  deleteFriend,
} = require('../../controllers/friendsController');

// /api/users/:userId/friends/:friendId
router.route('/').post(createFriend).delete(deleteFriend);

module.exports = router;
