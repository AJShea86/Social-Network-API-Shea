const router = require("express").Router();

const {
  getUsers,
  getSingleUserById,
  createNewUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require("../../controllers/userController.js");

router.route("/").get(getUsers).post(createNewUser);

router
  .route("/:userId")
  .get(getSingleUserById)
  .put(updateUserById)
  .delete(deleteUserById);

router
    .route("/:id/friends/:friendId")
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;
