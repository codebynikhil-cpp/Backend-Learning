const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/').then(()=>{
    console.log("Connected to data base")
})

module.exports = connection