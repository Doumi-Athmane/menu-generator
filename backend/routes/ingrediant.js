const router = require('express').Router();
const connection = require('../connection');
const { ingrediants } = require('../requets/ingrediant/select');
const supprimer = require('../requets/ingrediant/supprimer');
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

router.post('/', (req, res) => {
    // store new ingrediant
    const nomIngrediant = req.body.nomIngrediant;
    const query = ajouter_ingrediant(nomIngrediant)
    connection.query(query, (err, results) => {
        if (err) {
            res.status(400);
            res.send({ err })
        } else res.status(200).json({ data: results });
    })

});


//----------------------------------------------DELETE-------------------------------------------------

router.delete('/:id', (req, res) => {
    // delete ingrediant with id 

    const id = req.params.id;

    connection.query(supprimer(id), (err, results) => {
        if (err) {
            res.status(400)
                .json({ err })
        } else res.status(203).json({ status: 'supperssion :) ' })
    })
});

module.exports = router;