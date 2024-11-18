// let express=require('express');
// let app=express();
// let cors=require('cors');
// const basic = require('./Routes/Route');
// const newroutes=require('./Routes/firstRoute')
// app.use(cors())
// let port=8080

// app.use('/basic',basic)
// app.use('/new',newroutes)

// app.listen(port,()=>{console.log(`running on port ${port}`)})

// File: src/index.js

// A simple function that adds two numbers
function add(a, b) {
    
    return a + b;
  }
  module.exports=add
  // Export the function so it can be imported in test files
  