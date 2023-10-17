var express = require('express');
var router = express.Router();
const intern_signup_route = require('../models/intern_signup')
const bcrypt = require('bcrypt');
const saltRounds = 10;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// router.post('/register', async(req, res)=> {
//   const user = new intern_signup_route(req.body)
//   try {
//     await user.save()
//     res.status(201).send(user)
//   } catch (error) {
//     res.status(500).send(error)
//   }
// });


// hasing password for register using post request

router.post('/register', async (req, res) => {
  const user = new intern_signup_route(req.body)

  // hashing password
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      // Store hash in your password DB.
      user.password = hash;
      console.log(user.password)
      try {
        user.save()
        res.status(201).send(user)
      } catch (error) {
        res.status(500).send(error)
      }
    });
  });
});


 
// for login using post request no hashing

// router.post('/login', async(req, res)=> {
//   try {
//     const user =await intern_signup_route.findOne({email: req.body.email, password: req.body.password})
//     console.log("found user")
//     if(!user){
//       return res.status(404).send({message: "user not found"})
//     }
//     res.send({message: "sucessfully logged in"})
//   } catch (error) {
//     res.status(500).send(error)
//   }
// });



// for login using post request using bcrypt

router.post('/login', async (req, res) => {
  try {
    const user = await intern_signup_route.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    bcrypt.compare(req.body.password, user.password, async (err, passwordsMatch) => {
      if (passwordsMatch) {
        // Passwords match, user is successfully logged in
        // res.send({ message: "Successfully logged in" });
        return res.status(200).json({ message: "Successfully logged in" })
      } else {
        // Passwords do not match
        // res.status(401).send({ message: "Authentication failed" });
        return res.status(401).json({ message: "Authentication failed" })
      }
    });
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = router;
