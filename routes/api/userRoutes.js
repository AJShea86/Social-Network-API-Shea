const router = require('express').Router();


const {
    getUsers,
    getSingleUserById,
    createNewUser,
    updateUserById,
    deleteUserById
} = require('../../controllers/userController.js');

router.route('/').get(getUsers).post(createNewUser);

router
    .route('/:userId')
    .get(getSingleUserById)
    .put(updateUserById)
    .delete(deleteUserById)
    

module.exports = router;

