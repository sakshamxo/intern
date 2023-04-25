const express = require('express')
var router = express.Router()
const {homepage,phonepage,lastname,carbrand,topcities} = require('../controllers/indexControllers')

//shows Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
router.get("/home",homepage)


// shows Male Users which have phone price greater than 10,000.
router.get("/phone",phonepage)

//show Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
router.get('/lastname', lastname)

//show Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
router.get('/carbrands',carbrand)

//Show the data of top 10 cities which have the highest number of users and their average income.
router.get('/topcities',topcities)
module.exports = router