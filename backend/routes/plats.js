const route = require('express').Router();
const connection = require('../connection');
const { plats } = require('../requets/select');
const ingrediantDePlat = require('../requets/select_ingrediant_de_plat');
const ajouter = require('../requets/ajouter_plat');

route.get('/', (req, res) => {
    // return tout les entrees de la table plats
    connection.query(plats(), (err, results, fields) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({err}))
        }
        res.send(JSON.stringify(results));
    });
});

route.post('/', (req, res) => {
    const { nom, type, prix } = req.params;
    connection.query(ajouter(nom, type, prix), () => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({err}))
        }
        res.status(200);
        res.send(JSON.stringify({msg: "entry added successfully."}))
    })
});

route.get('/:id', (req, res) => {
    // deletes entry of id
    connection.query(plats() + " where idPlat="+req.params.id, (err, results, fields) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({err}))
        }
        res.send(JSON.stringify(results[0]));
    });
});

route.get('/:id/ingrediants', (req, res) => {
    // return all ingrediants of plat id
    connection.query(ingrediantDePlat(req.params.id), (err, results, fields) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({err}))
        }
        res.send(JSON.stringify(results));
    });
})

route.get('/unused', (req, res) => {
    // return table entries according to some constrains
});

module.exports = route;