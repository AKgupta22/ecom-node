const mainCategory = require('../models/mainCategory')

const joi = require('joi')

const createMainCategory = async (req, res, next) => {

    const validationSchema = joi.object().keys({
        name: joi.string().alphanum().min(3).required()
    }).strict()

    const { error } = validationSchema.validate(req.body)

    if (error) {
        res.status(422).json({ success: false, message: error.details[0].message })
    }
    else {
        try {
            const duplicateValue = await mainCategory.findOne({
                name: req.body.name
            })
            if (duplicateValue)
                res.status(409).json({ success: false, message: "already exist" })
            else {
                const data = new mainCategory(req.body)
                await data.save()
                res.json({ success: true, data: data })
            }
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Internal server error"
            })
        }
    }

}

module.exports = { createMainCategory }