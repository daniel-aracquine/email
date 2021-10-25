const mongoose = require('mongoose')
const emailSchema = new mongoose.Schema({
    email:{
        type:String
    }
})

const Email = mongoose.model('Email', emailSchema)
module.exports = Email