var express = require('express');
var router = express.Router();
const intern_signup_route = require('../models/intern_signup')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/register', async(req, res)=> {
  const user = new intern_signup_route(req.body)
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
    const user = await intern_signup_route.findById(req.params.id)
    if(!user){
      return res.status(404).send()
    }
    res.send(user)
  } catch (error) {
    res.status(500).send(error)
  }
});

// for login using post request

router.post('/login', async(req, res)=> {
  try {
    const user =await intern_signup_route.findOne({email: req.body.email, password: req.body.password})
    console.log("found user")
    if(!user){
      return res.status(404).send({message: "user not found"})
    }
    res.send({message: "sucessfully logged in"})
  } catch (error) {
    res.status(500).send(error)
  }
});



module.exports = router;
