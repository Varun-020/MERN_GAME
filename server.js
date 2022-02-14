const express = require('express');
const connect = require('./config/db');
const path = require('path');
const router = require('./routes/userRoutes');
var cors = require('cors');
const fs = require('fs');

require('dotenv').config();

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
// connect mongodb database

connect();

//routes

app.use('/', router);

const PORT = process.env.PORT || 8000;




app.listen(PORT, () => {
    console.log('Your app is running at port :', PORT);
});