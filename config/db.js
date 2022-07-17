require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));    
        }catch (error) { 
        console.log("could not connect");    
        }
}
module.exports = connectDB;