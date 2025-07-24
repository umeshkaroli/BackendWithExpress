//import th model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try {
            //fetch all todos from the database
            const todos = await Todo.find({});

            //response 
            res.status(200).json({
                success: true,
                data: todos,
                message: 'Entire todo data is fetched successfully'
            });
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        });
    }
}

exports.getTodoById = async(req, res) => {
    try {
            //extract id from request parameters
            const  id  = req.params.id;
            const todo = await Todo.findById({_id: id});

            //check if todo exists
            if(!todo) {
                return res.status(404).json({
                    success: false,
                    data: "Todo not found",
                    message: `Todo with id ${id} does not exist`
                });
            }
            //response
            res.status(200).json({
                success: true,
                data: todo,
                message: `Todo with id ${id} is fetched successfully`
            });
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        });
    }
}