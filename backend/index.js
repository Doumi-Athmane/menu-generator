const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt')
const path = require('path')
require('dotenv').config();
const { port, JWT_SECRET } = require('./config')
let getRoutes = require('./routes');

app.use(express.static(path.join(__dirname, 'build')))

app.use(bodyParser.json());
app.use(cors())
//app.use(jwt({ secret: JWT_SECRET, algorithms: ['HS256'] }).unless({path: ['/api/auth/login']}))

app.use('/api', getRoutes());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log('server started at ' + port))