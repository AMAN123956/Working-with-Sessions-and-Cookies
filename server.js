// Importing Modules 
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDbStore = require('connect-mongodb-session')

// Constant Variables
const PORT = process.env.PORT || 3000
// Initializing Express App
const app = express()
// Configuring Session(Initializing Session)
app.use(session({secret:'mysecret',resave:false,saveUninitialized:false}))

// Routes 
const authRoutes = require('./src/routes/authRoutes')
const generalRoutes = require('./src/routes/generalRoutes')

app.use('/home', generalRoutes);
app.use('/', authRoutes);


// Listening To PORT
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})


