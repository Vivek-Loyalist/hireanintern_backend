const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  company_name: {
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

const employer_signup = mongoose.model('employer_signup', usersSchema, 'employer_signup'); 
// in line 23 'intern_signup' is the name of the collection in the collection

module.exports = employer_signup;