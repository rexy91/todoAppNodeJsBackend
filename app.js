// import dependencies 
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// define the express app 
const app = express();

// Start the server with port 3000 
app.listen(3000, () => console.log('server started'))
