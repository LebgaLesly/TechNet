const mongoose = require('mongoose')

const accessoryProductsSchema = new mongoose.Schema({
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

const AccessoryProductsModel = mongoose.model("accessoryproducts", accessoryProductsSchema)
module.exports = AccessoryProductsModel