const router = require('express').Router();
const connection = require('../connection');
const { ingrediants } = require('../requets/ingrediant/select');

const ajouter_ingrediant = require('../requets/ingrediant/ajouter')

//----------------------------------------------GET---------------------------------------------------------------

router.get('/', (req, res) => {
    // get all entries of ingrediant
    connection.query(ingrediants(), (err, results) => {
        if (err) {
            res.status(400);
            res.json({ err })
        }
        res.json(results)
    });
});

router.get('/:id', (req, res) => {
    // get ingrediant entry of id
    connection.query(ingrediants(req.params.id), (err, results) => {
        if (err) {
            res.status(400);
            res.json({ err })
        }
        res.json(results[0])
    });
});

//------------------------------------------------POST------------------------------------------------

router.post('/add_ing', (req, res) => {
    // store new ingrediant
    const nomIngrediant = req.body.nomIngrediant;

    connection.query(ajouter_ingrediant(nomIngrediant), (err, results) => {
        if (err) {
            res.status(400);
            res.send({ err })
        } else res.status(200).json({ data: results });
    })

});

module.exports = router;