const { User} = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    },

    getUser({params}, res) {
        User.findOne({_id: params.id})
        .populate({path:'thoughts', path:'friends'})
        .then((user) => res.json(user))
        .catch((err)=> res.status(500).json(err))
    },

    createUser(req, res) {
        User.create(req.body)
        .then((user)=>res.json(user))
        .catch((err)=>res.status(500).json(err))
    },

    updateUser(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.id},
            {username: req.body.username, email: req.body.email},
            {new: true}
        )
        .then((user) => {
            if (!user) {
                res.status(404).json('User not found with that id')
            } else {res.json(user)}
        })
        .catch((err) => res.status(500).json(err))
    },

    deleteUser(req, res) {
        User.findOneAndDelete({_id: req.params.id})
        .then((user) => {
            if (!user) {
                res.status(404).json('User not found with that id')
            } else {res.json(user)}
        })
        .catch((err)=>res.status(500).json(err))
    },

    addFriend(req, res) {
        User.findOneAndUpdate(
            {_id:req.params.userId},
            {$push: {friends: req.params.friendId}},
            {new: true}
        )
        .then((user) => res.json(user)).catch((err) => res.status(500).json(err))
    },

    removeFriend(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friend: params.friendId}},
            {new: true}
        )
        .then((user) => res.json(user)).catch((err) => res.status(500).json(err))
    }
}