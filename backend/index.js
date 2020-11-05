const { port } = require('./config')
const express = require('express');
const app = express();
let getRoutes = require('./routes');

app.use('/api', getRoutes());

app.get('/', (req, res) => {
    res.send('welcome to the home page');
});

app.listen(port, () => console.log('server started at ' + port))