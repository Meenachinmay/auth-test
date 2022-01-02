const express = require ('express')
const app = express()

const authRouter = require('./routes/auth/index')

//middleware
app.use('/apiV1', authRouter)

const port = process.env.port || 8000

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})