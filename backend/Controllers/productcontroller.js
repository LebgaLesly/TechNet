
//Require Models
const ApplePhoneModel = require('../models/applePhoneModel')
const SamsungPhoneModel = require('../models/samsungPhoneModel')
const SamsungTvModel = require('../models/samsungTvModel')
const HisenseTvModel = require('../models/hisenseTvModel')
const AccessoryProductsModel = require('../models/accessoryProductsModel')



//Get samsungphone
const getSamsungPhone =  async (req, res) => {
    try {
        const samsungphone =  await SamsungPhoneModel.find()
        res.status(200).json(samsungphone)
    } catch (error) {
        console.error({error: 'Could not get Products'})
    }
    
  }

//Get applephone
const getApplePhone =  async(req, res) => {
    try {
        const applephone =  await ApplePhoneModel.find()
        res.status(200).json(applephone)
    } catch (error) {
        console.error({error: 'Could not get Products'})
    }
  }

//Get samsungtv
const getSamsungTv = async(req, res) => {
    try {
        const samsungtv =  await SamsungTvModel.find()
        res.status(200).json(samsungtv)
    } catch (error) {
        console.error({error: 'Could not get Products'})
    }
  }

//Get hisensetv
const getHisenseTv = async(req, res) => {
    try {
        const hisensetv =  await HisenseTvModel.find()
        res.status(200).json(hisensetv)
    } catch (error) {
        console.error({error: 'Could not get Products'})
    }
  }

//Get Accessory products
const getAccessoryProducts = async(req, res) => {
    try {
        const accessoryproducts =  await AccessoryProductsModel.find()
        res.status(200).json(accessoryproducts)
    } catch (error) {
        console.error({error: 'Could not get Products'})
    }
  }

  //Post samsungphone
const createSamsungPhone =  async (req, res) => {
    try {
        await SamsungPhoneModel.create(req.body)
        res.status(201).json(" Product has been Created")
    } catch (error) {
        console.error({error: "Could not create Product"})
    }
  }

//Post applephone
const createApplePhone = async (req, res) => {
    try {
        await ApplePhoneModel.create(req.body)
        res.status(201).json(" Product has been Created")
    } catch (error) {
        console.error({error: "Could not create Product"})
    }
   
  }

//Post samsungtv
const createSamsungTv = async(req, res) => {
    try {
        await SamsungTvModel.create(req.body)
        res.status(201).json(" Product has been Created")
    } catch (error) {
        console.error({error: "Could not create Product"})
    }
  }

//Post hisensetv
const createHisenseTv =  async(req, res) => {
    try {
        await HisenseTvModel.create(req.body)
        res.status(201).json(" Product has been Created")
    } catch (error) {
        console.error({error: "Could not create Product"})
    }
  }

//Post Accessory products
const createAccessoryProducts = async(req, res) => {
    try {
        await AccessoryProductsModel.create(req.body)
        res.status(201).json(" Product has been Created")
    } catch (error) {
        console.error({error: "Could not create Product"})
    }
  }


  module.exports = {
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
  }