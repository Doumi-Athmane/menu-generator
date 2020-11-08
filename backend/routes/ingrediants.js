const router = require('express').Router();
const connection = require('../connection')
const { ingrediants } = require('../requets/select')

router.get('/', (req, res) => {
    // get all entries of ingrediant
    connection.query(ingrediants(), (err, results) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({err}))
        }
        res.send(JSON.stringify(results))
    });
});

router.get('/:id', (req, res) => {
    // get ingrediant entry of id
    connection.query(ingrediants(req.params.id), (err, results) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({err}))
        }
        res.send(JSON.stringify(results[0]))
    });
});

router.post('/', (req, res) => {
    // store new ingrediant
});

module.exports = router;