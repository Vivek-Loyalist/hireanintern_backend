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

// get request by id 
router.get('/register/:id', async(req, res)=> {
  try {
    const user = await inter_signup_route.findById(req.params.id)
    if(!user){
      return res.status(404).send()
    }
    res.send(user)
  } catch (error) {
    res.status(500).send(error)
  }
});



module.exports = router;
