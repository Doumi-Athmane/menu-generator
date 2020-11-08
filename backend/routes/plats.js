const route = require('express').Router();
const connection = require('../connection');
const { plats } = require('../requets/select');

route.get('/', (req, res) => {
    // return tout les entrees de la table plats
    connection.query(plats(), (err, results, fields) => {
        res.send(JSON.stringify(results));
    });
});

route.post('/', (req, res) => {
    // validate and add entry to the table
});

route.get('/:id', (req, res) => {
    // deletes entry of id 
    res.send("requested id: " + req.params.id);
});

route.get('/:id/ingrediants', (req, res) => {
    // return all ingrediants of plat id
})

route.get('/unused', (req, res) => {
    // return table entries according to some constrains
});

module.exports = route;