const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '2d'})
}

//schema
const UserModel = require('../models/userModel')

//login User
const loginUser = async (req, res) => {
    const { name, password } = req.body

    try {
        const user = await UserModel.login(name, password)

        //create a token
        const token = createToken(user._id)

        res.status(201).json({name, token})
    
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//signup User
const signupUser = async (req, res) => {
    const { name, email, password} = req.body

    try {
        const user = await UserModel.signup(name, email, password)

        //create a token
        const token = createToken(user._id)

        res.status(201).json({name, token})
    
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    loginUser,
    signupUser
}