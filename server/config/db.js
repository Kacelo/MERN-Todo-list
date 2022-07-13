// importing mongoose module
const mongoose = require("mongoose");

// constant containing the database connection string in ouur ENV file.
const db = process.env.MONGO_URI;

// function to connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;