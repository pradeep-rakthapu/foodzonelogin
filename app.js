const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const db = require('./db');
const port = process.env.PORT || 8080;
const cors = require('cors');
app.use(cors());

const AuthController = require('./controller/authController');
app.get('/', (req,res) => {
    if(err) throw err;
    res.send("welcome to login logout")

})
app.use('/api/auth', AuthController);

app.listen(port,() => {
    console.log(`Running on port ${port}`)
})