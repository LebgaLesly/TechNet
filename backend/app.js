const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const port = process.env.PORT  || 5000
const productRoutes = require('./Routes/ProductsRoutes')

// init app & middleware
const app = express();
app.use(express.json());
app.use(cors());

//connecting to database
const uri = 'mongodb+srv://LebgaLesly:lesly112@clusterlesly.ck0bm2i.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri).then(() => {
  console.log("Connected to Database")
})

// routes 
app.use('/products', productRoutes)


app.listen(port, () => {
  console.log(
    `Server started on PORT: ${port} .`
  )
  })




