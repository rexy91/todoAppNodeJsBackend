// import dependencies 
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

// define the express app 
const app = express()

// Middlewares:
app.use(cors())
app.use(bodyParser.json())

// Import routes
const todosRouter = require('./routes/todos')
app.use('/todos', todosRouter)

// Start the server with port 3000 
app.listen(3000, () => console.log('server started'))

//Connect to DB
mongoose.connect(
process.env.DB_CONNECTION_URL,
{ useNewUrlParser: true })


// To check if database is connected successfully.
const DB = mongoose.connection
DB.once('open', () => console.log('connected to database'))
DB.on('error', (error)=> console.error(error))


