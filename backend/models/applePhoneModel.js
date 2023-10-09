const mongoose = require('mongoose')

const applePhoneSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },

    
})

const ApplePhoneModel = mongoose.model("applephones", applePhoneSchema)
module.exports = ApplePhoneModel