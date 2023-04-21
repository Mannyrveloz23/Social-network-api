const { Thought, User} = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err))
    },

    getThought(req, res) {
        Thought.findOne({_id: req.params.id})
        .then((thoughts) => res.json(thoughts))
        .catch((err)=> res.status(500).json(err))
    },

    createThought(req, res) {
        Thought.create(req.body)
        .then((thoughts) => {
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: {thoughts: thoughts._id}},
                {new: true}
            );
        })
        .then((user) => {
            if (!user) {
                return res.status(404).json({message: "Thought not created"});
            } 
            res.json(user)
            
        })
        .catch((err)=>res.status(500).json(err))
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.id},
            {ThoughtText: req.body.ThoughtText, username: req.body.username},
            {new: true}
        )
        .then((thoughts) => {
            if (!thoughts) {
                res.status(404).json('Thought not found with that id')
            } else {res.json(thoughts)}
        })
        .catch((err) => res.status(500).json(err))
    },

    deleteThought(req, res) {
        Thought.findOneAndDelete({_id: req.params.id})
        .then((thoughts) => {
            if (!thoughts) {
                res.status(404).json('User not found with that id')
            } else {res.json(thoughts)}
        })
        .catch((err)=>res.status(500).json(err))
    },

    addReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id:req.params.id},
            {$push: {reactions: req.body}},
            {new: true}
        )
        .then((thoughts) => res.json(thoughts)).catch((err) => res.status(500).json(err))
    },

    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {reactions: {reactions: params.reactionId}}},
            {new: true}
        )
        .then((thoughts) => res.json(thoughts)).catch((err) => res.status(500).json(err))
    }
}