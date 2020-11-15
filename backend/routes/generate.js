const router = require('express').Router();
const connection = require('../connection')
const generate = require('../requets/generer_menu')

router.get('/', (req, res) => {
    // Creation de menu aléatoire
    connection.query(generate('e'), (err, results) => {
        if (err) {
            res.status(400);
            res.json({ err })
        } else {
            connection.query(generate('p'), (err, results2) => {
                if (err) {
                    res.status(400);
                    res.json({ err })
                } else {
                    connection.query(generate('d'), (err, results3) => {
                        if (err) {
                            res.status(400);
                            res.json({ err })
                        } else {
                            res.json({
                                entree: results,
                                principal: results2,
                                dessert: results3
                            })
                        }
                    });
                }
            });
        }

    })
});

module.exports = router;