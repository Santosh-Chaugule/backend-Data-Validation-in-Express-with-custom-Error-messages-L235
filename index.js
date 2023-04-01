// console.log("custom Error msg")

const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator')
require('dotenv').config();
app.use(express.json())

//let define some routes

app.post('/students',
    body('password')
        .isLength({ min: 5 })
        .withMessage('The length should be minimum 5 character')
        .matches(/\d/)
        .withMessage('must contain number')
    , (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ 'err': errors.array() })

        }
        res.status(200).json({
            "msg": "OK"
        })

    });







app.listen(3000, () => {
    console.log(`The server is running on port ${3000}`)
})