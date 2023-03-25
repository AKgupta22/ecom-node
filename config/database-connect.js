const mongoose = require('mongoose')
mongoose.connect(process.env.databaseBaseUrl)
    .then(() => console.log("Database is connected"))
    .catch((e) => console.log(e))