var express = require('express');
var router = express.Router();
const job_details_route = require('../models/job_details')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/jobdetails', async(req, res)=> {
  const user = new job_details_route(req.body)
  try {
    await user.save()
    res.status(201).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
});

// get request by id 
router.get('/jobdetails/:id', async(req, res)=> {
  try {
    const user = await job_details_route.findById(req.params.id)
    if(!user){
      return res.status(404).send()
    }
    res.send(user)
  } catch (error) {
    res.status(500).send(error)
  }
});



module.exports = router;
