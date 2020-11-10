const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const { port } = require('./config')
let getRoutes = require('./routes');

app.use(bodyParser.json());

app.use('/api', getRoutes());





app.get('/', (req, res) => {
    res.send('welcome to the home page');
    var date = new Date()
    console.log(date.getDate())
});

app.listen(port, () => console.log('server started at ' + port))