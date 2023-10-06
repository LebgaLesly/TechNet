const {MongoClient} = require('mongodb')

let dbConnection
const uri = 'mongodb+srv://LebgaLesly:lesly112@clusterlesly.ck0bm2i.mongodb.net/?retryWrites=true&w=majority'


module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })

        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: ()  => dbConnection
}