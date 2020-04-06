const mongoose  = require('mongoose')

// Define the schema
const todoSchema = mongoose.Schema({

    // Title, description with String type, and required to be true
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        require: true
    }
})

// Export the schema
// mongoose.model takes two argument, first will be the name of the model, second is the schema.
module.exports = mongoose.model('Todos', todoSchema)