let express = require('express')
let auth = require('./auth')
let router = express.Router()


//daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi)
router.post('/api/v1/login', auth.login)

module.exports = router