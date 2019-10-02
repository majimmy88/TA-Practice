const express = require('express');
const path = require('path');
const controller = require('./controllers/controller.js');

const PORT = 3000

const app = express()


app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, ()=> console.log(`Movie list app listening on port ${PORT}`))