const route = require('express').Router();

route.get('/', (req, res) => {
    // return tout les entrees de la table plats
    res.send('test')
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