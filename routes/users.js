var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/user');
const { response } = require('../app');

let users = []

/* GET users listing. */
router.get('/api/users', function(req, res) {
  User.find({}).then(users => {
    res.json(users)
  })
});

router.post('/api/users', async (req, res) => {
  const body = req.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)


  const user = new User({
    username: body.username,
    passwordHash,
    firstname: body.firstname,
    lastname: body.lastname
  })
  try {
    const savedUser = await user.save()
    res.json(savedUser)
  } catch (error) {
    res.status(400)
    res.send(error)
  }
  
})

module.exports = router;
