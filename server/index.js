const express = require ('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        data: "Hello world"
    })
})

const port = process.env.port || 8000

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})