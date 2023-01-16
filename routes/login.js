const User = require('../models/user')
const router = require('express').Router()
const bcrypt = require('bcrypt')
const { response } = require('../app');

router.post('/api/login', async (req, res) => {

    const body = req.body
    const user = await User.findOne({ username: body.username})

    const passwordCorrect = user === null || user.username === '' || user.password === ''
        ? false
        : await bcrypt.compare(body.password, user.passwordHash)
    
    if (!(user && passwordCorrect)) {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }

    res.status(200).send({ username: user.username, id: user.id})


})

module.exports = router;