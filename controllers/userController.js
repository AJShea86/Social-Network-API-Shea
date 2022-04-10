const { User, Thought } = require("../models");

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate("thoughts")
      .populate("friends")
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  createNewUser(req, res) {
    console.log(req.body)
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  deleteUserById(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then(
        (user) =>
          !user
            ? res.status(404).json({ message: "No user with that ID" })
            : User.deleteMany({ _id: { $in: user } }) //not sure what needs to replace students
      )
      .then(() => res.json({ message: "User deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  updateUserById(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  addFriend({ params, body }, res) {
    console.log(params, body)
    User.findOneAndUpdate(
      { _id: params.id },
      { $addToSet: { friends: body._id } },
      { runValidators: true }
    )
      .then((friend) => {
        console.log(friend)
        if (!friend) {
          res.status(404).json({ message: "No friends found with this id!" });
          return;
        }
        res.json(friend);
      })
      .catch((err) => res.status(400).json(err));
  },

  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.id },
      { $pull: { friends: params.friendId } },
      { runValidators: true }
    )
      .then((friend) => {
        if (!friend) {
          res.status(404).json({ message: "No friends found with this id!" });
          return;
        }
        res.json(friend);
      })
      .catch((err) => res.status(400).json(err));
  },
};
