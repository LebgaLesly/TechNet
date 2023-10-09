const mongoose = require('mongoose')

const samsungTvSchema = new mongoose.Schema({
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

const SamsungTvModel = mongoose.model("samsungtvs", samsungTvSchema)
module.exports = SamsungTvModel