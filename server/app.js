const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
const PORT = config.get('port')

app.use('/upload', require('../routes/upload.routes'))

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch(e) {
        process.exit(1)
    }
}

start()

app.listen(PORT, () => console.log(`App has been started on port ${PORT} .`))