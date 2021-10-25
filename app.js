const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('./db/mongoose')
const Email = require('./models/email')
app.use(express.json())
app.post('/email',async (req,res) => {
    const email = new Email(req.body)
    try {
        await email.save()
        res.send(email)
    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})