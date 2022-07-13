//import express 
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// connection to database imported
const connectDB = require("./config/db"); //added

// creating an instance of an express application server
const app = express();


//import routes
const todo = require("./routes/todo");

// calling function to connect to the DB
connectDB();


app.use(cors({ origin: true, credentials: true }));
// connect database

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

//route to be used in API and to test with postman
app.use("/api/todo", todo);


// setting up port
const PORT = process.env.PORT || 8000;

// app.listen: server connection on local host
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});