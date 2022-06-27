//import express 
require("dotenv").config();
const express = require("express");
const cors = require("cors");


const connectDB = require("./config/db"); //added

const app = express();
//import routes
const todo = require("./routes/todo");
connectDB();//added


app.use(cors({ origin: true, credentials: true }));
// connect database

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

//route to be used in API and to test with postman
app.use("/api/todo", todo);


// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});