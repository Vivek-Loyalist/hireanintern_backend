const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
 
});

const intern_signup = mongoose.model('intern_signup', usersSchema, 'intern_signup'); 
// in line 23 'intern_signup' is the name of the collection in the database

module.exports = intern_signup;