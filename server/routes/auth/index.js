const express = require ('express')

const router = express.Router()

//
const { register } = require ('../../controllers/auth/index')

//
const { runvalidator } = require('../../validators/index')

router.post('/create-new-user', runvalidator, register)


module.exports = router