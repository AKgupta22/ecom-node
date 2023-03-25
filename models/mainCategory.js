const mongoose = require('mongoose')

const mainCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    }
})

const mainCategoryModel = mongoose.model('maincategory', mainCategorySchema)
module.exports = mainCategoryModel