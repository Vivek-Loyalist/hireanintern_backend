const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({

  job_title: {
    type: String,
    required: true,
  },
  
  company_name: {
    type: String,
    required: true,
  },

    job_location: {
        type: String,
        required: true,
    },

  job_description: {
    type: String,
    required: true,
  },
  
  image_source: {
    type: String,
    required: true,
  },
 
});

const job_details = mongoose.model('job_details', usersSchema, 'job_details'); 
// in line 20 job_details is the name of the collection in the collection

module.exports = job_details;