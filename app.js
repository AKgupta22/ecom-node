const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const port = 8000 || process.env.PORT

require('./services/database/database-connect')// database connection

app.listen(() => {
    console.log(`Server is listening at port [${port}]`)
})