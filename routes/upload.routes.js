const {Router} = require('express')
const Track = require('../server/models/Track')
const config = require('config')

const router = Router()


// /api/auth
router.post(
    '/new_track', [],
    async (req, res) => {
        try {
            const {title, artist} = req.body
            if (!file) {
                return res.status(400).json({message: 'Ошибка файла!'})
            }
            const track = new Track({title, artist, file})
            await track.save()
            res.status(201).json({message: 'Композиция успешно добавлена!'})
        } catch(e) {
            res.status(500).json({message: e.message})
        }
    })

module.exports = router

router.post(
    '/new_track_file', [],
    async (req, res) => {

    })