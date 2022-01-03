const  User = require('../../models/user.model')
const jwt = require ('jsonwebtoken')
const sendgrid = require ('@sendgrid/mail')

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

exports.register = async (req, res) => {
    const { username, email, password } = req.body

    const user = await User.findOne({email: email});
    if ( user ) {
        return res.status(400).json({
            error: "Email is already taken"
        })
    }
    
    let newUser = await new User({username, email, password})

    if (newUser) {
        await newUser.save()

        return res.status(200).json({
            message: "register success",
            newuser: newUser
        })
    } else {
        return res.status(400).json({
            message: "register failed",
            error: "Server error"
        })
    }
    
}

// send email to user to activate then save the data to the database
exports.regsiterUsingEmailActivation = async (req, res) => {
    const { username, email, password } = req.body

    const user = await User.findOne({email: email});
    if ( user ) {
        return res.status(400).json({
            error: "Email is already taken"
        })
    }

    const token = jwt.sign({username, email, password}, process.env.JWT_ACCOUNT_ACTIVATION, {expiresIn: '10m'})

    const emailData = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: `Account activation link`,
        html: `
            <p>Use following link to activate your account!</p>
            <p> ${process.env.CLIENT_URL}/auth/activate${token}</p>
            <hr />
        `
    }

    sendgrid.send(emailData)
        .then(sent => {
            return res.json({
                message: 'Activation link has been sent successfully!'
            })
        })
        .catch(err => {
            return res.json({
                error: err
            })
        })
}