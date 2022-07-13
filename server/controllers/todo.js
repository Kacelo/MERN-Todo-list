
// import the Schema model to match Database structure in MongoDB
const Todo = require("../models/todo");


//get all todos in database
exports.getAllTodo = (req, res) => {
    // method to loop through the database and collect all available data
    Todo.find()
        .then((todo) => {
            console.log({ todo });
            // response: data is returned in javaScript Object Notation aka JSON
            res.json(todo);
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "no todo found", error: err.message })
        );
};

// a function used to create or add data to the database
exports.postCreateTodo = (req, res) => {
    // create: creating new data in the format of the Schema Model
    Todo.create(req.body)
        .then((data) => {
            console.log({ data });
            // response sent back after data has been added to DB
            res.json({ message: "todo added successfully", data });
        })
        .catch((err) =>
            res.status(400).json({
                message: "unable to add new todo",
                error: err.message,
            })
        );
};
// A function used to EDIT or UPDATE the current availble data
exports.putUpdateTodo = (req, res) => {
    // an object containing properties mapped to the named route parameters in this case todos/:id. 
    // object of id is returned 
    console.log("id: ", req.params.id);

    // Contains key-value pairs of data submitted in the request body. 
    console.log("body: ", req.body);
    // function to find data by the id returned and show the key value pairs in this case 
    Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((todo) => {
            console.log("edit", { todo });
            return res.json({ message: "updated successfully", todo });
        })
        .catch((err) =>
            res.status(400)
                .json({ error: "unable to update todo", message: err.message })
        );
};
// delete function
exports.deleteTodo = (req, res) => {
    // use the schema model to find the specific ID and body of the specific data
    Todo.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "todo deleted successfully", data })
        )
        .catch((err) =>
            res.status(404)
                .json({ message: "task not found", error: err.message })
        );
};