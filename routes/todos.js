const express = require('express')
const router = express.Router()

// Import the schema 
const Todo = require('../models/Todo')

// Setup routes: 

// Getting all todos
router.get('/', async (req,res) => {
    try{
        const todos = await Todo.find()
    } catch(err){
        res.status(500).json({message: err.message})
    }
} )

// Creating a todo 

router.post('/', async (req,res) => {
    // Create a todo , with body from the client side.
    const todo = new Todo ({
        title: req.body.title,
        description: req.body.description
    })

    try{
        const newTodo = await todo.save()
    // Send back the new todo object after succesfuully created and saved.
        res.status(201).json({newTodo})

    } catch(err) {
        res.send(400).json({message: err.message})
    }
})

// Updating a todo

// router.patch('/id', (req,res) => {
//     // First find the todo inside the database:
//     let todo 
//     const getTodo = async (req) => {
//         try{
//             todo = await Todo.findById(req.params.id)
//             if (todo === null) {
//                 // If todo is not found in the database.
//                 return res.status(404).json({message: 'Cannot find todo item.'})
//             }
//         } catch(err){
//             return res.status(500).json({ message: err.message })
//         }
//     }
//     getTodo(req)
// })

module.exports = router 