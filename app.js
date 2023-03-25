const express = require('express')
const app = express()
app.use(express.json())
const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
app.use(cors())

const port = 8000 || process.env.PORT

require('./config/database-connect')// database connection

const mainCategory = require('./routes/mainCategory')

app.use('/maincategory', mainCategory)

app.listen(port,()=>{
    console.log(`Server is listening at port [${port}]`)
})