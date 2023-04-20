const router = require('express').Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// User routes
router.route('/').get(getUsers).post(createUser);

// User by ID routes
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

// Friend routes
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;