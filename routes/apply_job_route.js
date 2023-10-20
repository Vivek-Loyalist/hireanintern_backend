var express = require('express');
var router = express.Router();
const apply_job_route = require('../models/apply_job')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// apply job request

router.post('/applyjob', async(req, res)=> {
  const user = new apply_job_route(req.body)
  try {
    await user.save()
    res.status(201).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
});

// get request by id 
router.get('/applyjob/:id', async(req, res)=> {
  try {
    const user = await apply_job_route.findById(req.params.id)
    if(!user){
      return res.status(404).send()
    }
    res.send(user)
  } catch (error) {
    res.status(500).send(error)
  }
});

// post request to retrive data by job tittle, location,company name,job location and image_source
router.post('/')



module.exports = router;
