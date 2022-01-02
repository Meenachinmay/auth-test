const registerValidation = require('./authValidators')

exports.runvalidator = (req, res, next) => {
    const error = registerValidation(req.body)

    if (error) {
        return res.status(422).json({
            error: error.details[0].message
        })
    }

    next()
}