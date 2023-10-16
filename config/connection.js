const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://gurramvivek2k:hZlA4QL4cchTzsTk@cluster0.cb80rxn.mongodb.net/final_backend?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
).then(()=>{
    console.log('Connection Sucess to MongoDB Atlas')
}).catch((error)=>{
    console.log('error', error);
})


// Vivek changes