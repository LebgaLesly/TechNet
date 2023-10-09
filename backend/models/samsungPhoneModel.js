const mongoose = require('mongoose')

const samsungPhoneSchema = new mongoose.Schema({
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

const  SamsungPhoneModel = mongoose.model("samsungphones", samsungPhoneSchema)
module.exports = SamsungPhoneModel