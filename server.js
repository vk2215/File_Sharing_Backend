//main server
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');
// Cors

const corsOptions = {
  origin: (process.env.ALLOWED_CLIENTS)?.split(",")
  // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
}

//app.use(cors());



// Default configuration looks like
// {
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
//   }
//(corsOptions)
app.use(cors(corsOptions));
app.use(express.static('public'));

const connectDB = require('./config/db');
connectDB();

app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

// Routes 
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, console.log(`Listening on port ${PORT}.`));


//command to allow cors through web browser
//"C:\Program Files\Google\Chrome\Application\chrome.exe" --user-data-dir="C:\Chrome dev session" --disable-web-security

