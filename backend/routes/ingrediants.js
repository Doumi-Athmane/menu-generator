const router = require('express').Router();
const connection = require('../connection');
const { ingrediants } = require('../requets/select');

const ajouter_ingrediant = require('../requets/ajouter_ingrediant')

const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

//----------------------------------------------GET---------------------------------------------------------------

router.get('/', (req, res) => {
    // get all entries of ingrediant
    connection.query(ingrediants(), (err, results) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({ err }))
        }
        res.send(JSON.stringify(results))
    });
});

router.get('/:id', (req, res) => {
    // get ingrediant entry of id
    connection.query(ingrediants(req.params.id), (err, results) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({ err }))
        }
        res.send(JSON.stringify(results[0]))
    });
});

//------------------------------------------------POST------------------------------------------------
/*
router.post('/add_ing', jsonParser, (req, res) => {
    // store new ingrediant
    const nomIngrediant = req.body.nomIngrediant;

    connection.query(ajouter_ingrediant(nomIngrediant), jsonParser, (err, results) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({ err }))
        }
        res.status(200).json({
            data: results
        });
    })

});*/

module.exports = router;