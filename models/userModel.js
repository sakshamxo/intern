const mongoose = require('mongoose')
const userModel = new mongoose.Schema({
    id:Number,
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    income:String,
    city:String,
    car:String,
    quote:String,
    phone_price:String
})

const user = mongoose.model('user',userModel)
module.exports = user