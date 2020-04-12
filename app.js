// import dependencies 
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

// define the express app 
const app = express()
const MONGODB_URI = 'mongodb+srv://rexye1991:rexye1991@cluster0-arcfj.mongodb.net/test?retryWrites=true&w=majority'
// Middlewares:
app.use(cors())
app.use(bodyParser.json())

// Import routes
const todosRouter = require('./routes/todos')
app.use('/todos', todosRouter)

// Start the server with port 3000 
app.listen(3000, () => console.log('server started'))

app.get('/', ()=>{
    res.json({
        message:'hello you'
    })
})

//Connect to DB
mongoose.connect(
MONGODB_URI,
{ useNewUrlParser: true })

// To check if database is connected successfully.
const DB = mongoose.connection
DB.once('open', () => console.log('connected to database'))
DB.on('error', (error)=> console.error(error))


