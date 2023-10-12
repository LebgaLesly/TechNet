const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
})

// static signup method 
userSchema.statics.signup = async function(name, email, password)  {

    // credentials validation
    if (!name || !email || !password ) {
        throw Error('All fields must be filled')
    }

    if(!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }

    if(!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    // checking if email already exist in db
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error("Email Already Exists")
    }
    //generating salt value
    const salt = await bcrypt.genSalt(10)

    //hashing password
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ name, email, password: hash})

    return user
}

//static login method
userSchema.statics.login = async function(name, password) {

    if (!name || !password) {
        throw Error('All fields must be filled')
    }

     // checking if email and password match with db
     const user = await this.findOne({ name })
     if (!user) {
         throw Error("Incorrect Credential")
     }

     const match = await bcrypt.compare(password, user.password)

     if (!match) {
        throw Error('Incorrect Password')
     }

     return user
}


const UserModel = mongoose.model("Users", userSchema)
module.exports = UserModel