const router = require('express').Router();


const {
    getThoughts,
    getSingleThoughtById,
    createNewThought,
    updateThoughtById,
    deleteThoughtById
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).post(createNewThought);

router
    .route('/:thoughtId')
    .get(getSingleThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById)





module.exports = router;

