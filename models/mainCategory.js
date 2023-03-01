const mongoose = require('mongoose')

const mainCategorySchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const mainCategoryModel = mongoose.model('maincategory', mainCategorySchema)
module.exports = mainCategoryModel