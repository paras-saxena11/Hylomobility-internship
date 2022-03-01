const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

require('./db/mongoose')

const userRouter = require('./routers/userAdmin')

const app = express()

const port = process.env.PORT

app.use(cors({
    " Access-Control-Allow-Origin": "*"
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log("SERVER IS UP ON PORT", port)
})
