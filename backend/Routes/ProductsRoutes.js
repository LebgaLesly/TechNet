const express = require('express')
const router = express.Router()

//require Controllers
const {
    getSamsungPhone,
    getAccessoryProducts,
    getApplePhone,
    getHisenseTv,
    getSamsungTv,
    createAccessoryProducts,
    createApplePhone,
    createHisenseTv,
    createSamsungPhone,
    createSamsungTv
}  = require('../Controllers/productcontroller')


//GET samsungphone
router.get('/samsungphone', getSamsungPhone)

//GET applephone
router.get('/applephone', getApplePhone)

//GET samsungtv
router.get('/samsungtv', getSamsungTv)

//GET hisensetv
router.get('/hisensetv', getHisenseTv)

//GET accessory Products
router.get('/accessoryproducts', getAccessoryProducts)

//POST samsungphone
router.post('/samsungphone', createSamsungPhone)

//POST applephone
router.post('/applephone', createApplePhone)

//POST samsungtv
router.post('/samsungtv', createSamsungTv)

//POST hisensetv
router.post('/hisensetv', createHisenseTv)

//POST accessory Products
router.post('/accessoryproducts', createAccessoryProducts)


module.exports = router