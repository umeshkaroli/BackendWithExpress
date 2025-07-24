//import th model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async(req,res) => {
    try {
            const {id} = req.params;
            //find the todo by id and delete it
            const todo = await Todo.findByIdAndDelete({_id: id});

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
                data: null,
                message: `Todo with id ${id} is deleted successfully`
            });
    }
    catch(err) {
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        });
    }
}