const express = require("express");
const server = require('http').createServer();
const path = require ("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require('./server/database/connection');

const app = express();
// dotenv.config({path:'config.env'})
 const PORT = process.env.PORT||8080;

// log request
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to bady-parser
app.use(express.urlencoded({extended:true}));

// set view engine
app.set("view engine","ejs");
// app.set("views".path.resolve(__dirname,"views/ejs"));

// load assets
app.use('/css', express.static(path.resolve(__dirname,"assets/css")));
app.use('/img', express.static(path.resolve(__dirname,"assets/img")));
app.use('/js', express.static(path.resolve(__dirname,"assets/js")));

// load router
app.use('/', require('./server/routes/router'));

app.listen(PORT,()=>{console.log(`Server is runing on http://localhost:${PORT}`)});
// server.listen(PORT, () => console.log(`Listening on ${PORT}`));