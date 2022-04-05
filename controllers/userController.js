const { User, Thought } = require('../models');//does thought need to be here?

module.exports = {

getUsers(req, res){
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
},


getSingleUserById(req, res){

    User.findOne({_id: req.params.userId})
    //.select('-_v')
},


createNewUser(req, res){
    User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
},


updateUserById(req, res){
    User.findOneAndUpdate(
        { _id: req.params.userID },
        { $set: req.body },
        { runValidators: true, new: true }
    )


},


deleteUserById(){}


}

