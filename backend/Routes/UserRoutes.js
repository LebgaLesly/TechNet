const express = require('express')
const router = express.Router()

// require controllers
const {loginUser,
    signupUser} = require('../Controllers/userController')

//login Route
router.post('/login', loginUser)


//Signup Route
router.post('/signup', signupUser)

module.exports = router