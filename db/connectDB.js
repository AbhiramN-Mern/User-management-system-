const mongoose = require('mongoose');

// MongoDB Connection Function
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://hp1abhiram:uWjVcmm4hdCcHlmX@cluster0.u1cttcf.mongodb.net/userAuth?retryWrites=true&w=majority');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
