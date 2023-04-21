const router = require('express').Router();
const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// Thought Routes
router.route('/').get(getThoughts);
// Thought by ID Routes
router.route('/:id').get(getThought).put(updateThought).delete(deleteThought);

// Post through User ID Route
router.route('/:userId').post(createThought);

// Add Reaction Route
router.route('/:thoughtId/reactions').post(addReaction);

// Delete Reaction by ID Route
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;