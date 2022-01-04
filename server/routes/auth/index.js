const express = require ('express')

const router = express.Router()

//
const { regsiterUsingEmailActivation, accountActivation } = require ('../../controllers/auth/index')


//
const { runvalidator } = require('../../validators/index')

router.post('/create-new-user', runvalidator, regsiterUsingEmailActivation)
router.post('/account-activation', accountActivation)


module.exports = router