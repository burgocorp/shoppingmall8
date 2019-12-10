const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');



router.post('/register', userController.user_register);

router.post('/login', userController.user_login);

router.delete('/user_id', userController.user_delete);



module.exports = router;