const router = require("express").Router();

const {
  getThoughts,
  getSingleThoughtById,
  createNewThought,
  updateThoughtById,
  deleteThoughtById,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController.js");

router.route("/").get(getThoughts).post(createNewThought);

router
  .route("/:thoughtId")
  .get(getSingleThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
