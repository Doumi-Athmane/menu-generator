const route = require('express').Router();

route.get('/', (req, res) => {
    // return tout les entrees de la table plats
    res.end('test')
});

route.post('/', (req, res) => {
    // validate and add entry to the table
});

route.get('/:id', (req, res) => {
    // return table entry of id 
    res.send("requested id: " + req.params.id);
});

route.get('/not_recent', (req, res) => {
    // return table entries according to some constrains
});

module.exports = route;