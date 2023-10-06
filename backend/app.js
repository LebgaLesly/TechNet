const express = require('express');
const cors = require('cors');
const port = process.env.PORT  || 5000
const { connectToDb, getDb } = require('./db') 

// init app & middleware
const app = express();
app.use(express.json());
app.use(cors());


//db connection
let db
connectToDb((err) => {
  if(!err) {
    app.listen(port, () => {
      console.log(
        `Server started on PORT: ${port} .`
      );
    });
    db = getDb()
  }
})


//  Get routes for products
app.get("/products/hisensetv", (req, res) => {
  let hisenseTv = []

  db.collection('HisenseTv')
  .find()
  .forEach( product => hisenseTv.push(product))
  .then(() => {
    res.status(200).json(hisenseTv)
  })
  .catch(err => {
    res.status(500).json({err: "Could not get products"})
  })
})

app.get("/products/samsungtv", (req, res) => {
  let samsungTv = []

  db.collection('SamsungTv')
  .find()
  .forEach( product => samsungTv.push(product))
  .then(() => {
    res.status(200).json(samsungTv)
  })
  .catch(err => {
    res.status(500).json({err: "Could not get products"})
  })
})

app.get("/products/applephone", (req, res) => {
  let applePhone = []

  db.collection('ApplePhone')
  .find()
  .forEach( product => applePhone.push(product))
  .then(() => {
    res.status(200).json(applePhone)
  })
  .catch(err => {
    res.status(500).json({err: "Could not get products"})
  })
})

app.get("/products/samsungphone", (req, res) => {
  let samsungPhone = []

  db.collection('SamsungPhone')
  .find()
  .forEach( product => samsungPhone.push(product))
  .then(() => {
    res.status(200).json(samsungPhone)
  })
  .catch(err => {
    res.status(500).json({err: "Could not get products"})
  })
})



// Post route for Products
app.post("/products/hisensetv", (req, res) => {

  const products = req.body
  db.collection('HisenseTv')
    .insertMany(products)
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err => {
      res.status(500).json({err: "Could not create Documents"})
    })
})

app.post("/products/samsungtv", (req, res) => {

  const products = req.body
  db.collection('SamsungTv')
    .insertMany(products)
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err => {
      res.status(500).json({err: "Could not create Documents"})
    })
})

app.post("/products/applephone", (req, res) => {

  const products = req.body
  db.collection('ApplePhone')
    .insertMany(products)
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err => {
      res.status(500).json({err: "Could not create Documents"})
    })
})

app.post("/products/samsungphone", (req, res) => {

  const products = req.body
  db.collection('SamsungPhone')
    .insertMany(products)
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err => {
      res.status(500).json({err: "Could not create Documents"})
    })
})






