const mongoose = require('mongoose')

const hisenseTvSchema = new mongoose.Schema({
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

const HisenseTvModel = mongoose.model("hisensetvs", hisenseTvSchema)
module.exports = HisenseTvModel