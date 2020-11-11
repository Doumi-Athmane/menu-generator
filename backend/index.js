const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt')
require('dotenv').config();
const { port, JWT_SECRET } = require('./config')
let getRoutes = require('./routes');

app.use(bodyParser.json());
app.use(cors())
app.use(jwt({ secret: JWT_SECRET, algorithms: ['HS256'] }).unless({path: ['/api/auth/login']}))

app.use('/api', getRoutes());


app.get('/', (req, res) => {
    res.send('welcome to the home page');
    var date = new Date()
    console.log(date.getDate())
});

app.listen(port, () => console.log('server started at ' + port))