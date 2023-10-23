// var express = require('express');
// var router = express.Router();
// const apply_job_route = require('../models/apply_job')

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// // apply job request

// router.post('/applyjob', async(req, res)=> {
//   const user = new apply_job_route(req.body)
//   console.log(user)
//   try {
//     await user.save()
//     res.status(201).send(user)

//   } catch (error) {
//     res.status(500).send(error)
//   }
// });

// // get request by id 
// router.get('/applyjob/:id', async(req, res)=> {
//   try {
//     const user = await apply_job_route.findById(req.params.id)
//     if(!user){
//       return res.status(404).send()
//     }
//     res.send(user)
//   } catch (error) {
//     res.status(500).send(error)
//   }
// });

// // post request to retrive data by job tittle, location,company name,job location and image_source
// router.post('/')



// module.exports = router;



var express = require('express');
var router = express.Router();
const axios = require('axios'); 
const apply_job_route = require('../models/apply_job')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// apply job request

// router.post('/applyjob', async (req, res) => {
//   try {
//     // Save the user to the database
//     const user = new apply_job_route(req.body);
//     const savedUser = await user.save();
    
//     // Extract the ObjectId from the saved user
//     const userId = savedUser._id;


//     // Make a POST request to the other API
//     const response = await axios.get('http://localhost:4001/fetch-resume');

//     // Check the response status
//     if (response.status === 200) {
//       // Extract the resume_score from the response
//       const resumeScore = response.data.resume_score;

//       // console.log(resumeScore); // For debugging
//       console.log('resumeScore', resumeScore); // For debugging


//       // Now you can use the "resumeScore" variable as needed

//       // Add your additional task here, after the user is saved and resumeScore is obtained.
//       // This task should go here.

//       res.status(201).send('message: User saved successfully');
//     } else {
//       // Handle the case when the response status is not 200
//       console.error('Error in the response from /fetch-resume:', response.status);
//       res.status(500).send('Internal Server Error - /fetch-resume');
//     }
//   } catch (error) {
//     // Log the error details for debugging
//     console.error('Error in /applyjob:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });




router.post('/applyjob', async (req, res) => {
  try {
    // Save the user to the database
    const user = new apply_job_route(req.body);
    const savedUser = await user.save();
    
    // Extract the ObjectId from the saved user
    const userId = savedUser._id;

    // Make a POST request to the other API
    const response = await axios.get('http://localhost:4001/fetch-resume');

    // Check the response status
    if (response.status === 200) {
      // Extract the resume_score from the response
      const resume_score = response.data.resume_score;

      // Update the user's document with the new resumeScore value
      await apply_job_route.updateOne({ _id: userId }, { $set: { resume_score } });

    

      // Respond with a status 200 to indicate success
      res.status(200).send('Data logged and user updated successfully.');
    } else {
      // Handle the case when the response status is not 200
      console.error('Error in the response from /fetch-resume:', response.status);
      res.status(500).send('Internal Server Error - /fetch-resume');
    }
  } catch (error) {
    console.error('Error in /applyjob:', error);
    res.status(500).send('Internal Server Error');
  }
});





module.exports = router;


