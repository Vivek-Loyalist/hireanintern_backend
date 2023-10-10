const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  
  full_name: {
    type: String,
    required: true,
  },

    email: {
        type: String,
        required: true,
    },

  phone_number: {
    type: Number,
    required: true,
  },
  

  intern_resume: {
    type: String,
    // required: true, should have to write and change the file typeas required.
  },
 
});

const apply_job = mongoose.model('apply_job', usersSchema, 'apply_job'); 
// in line 20 apply_job is the name of the collection in the collection

module.exports = apply_job;