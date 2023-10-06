var express = require('express');
var router = express.Router();
const inter_signup_route = require('../models/intern_signup')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/register', async(req, res)=> {
  const user = new inter_signup_route(req.body)
  try {
    await user.save()
    res.status(201).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
});


module.exports = router;
