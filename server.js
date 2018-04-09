const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes/note.route');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

const mongoose = require('mongoose');
const dbConfig = require('./config/database.config');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to database");
}).catch((err)=>{
    console.log("Error connecting database");
    process.exit();
})

app.use('/', routes);


app.listen(3000, ()=> {
    console.log("Server is listening to port 3000");
})