const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    artist: {type: String},
    file: {type: String, required: true, unique: true},
})

module.exports = model('Track', schema)