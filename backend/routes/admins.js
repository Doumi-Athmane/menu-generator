const router = require('express').Router();
const connection = require('../connection');
const { admin } = require('../requets/select')

router.get('/:id', (req, res) => {
    // get admin of id
    connection.query(admin(req.params.id), (err, results) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({err}))
        }
        res.send(JSON.stringify(results[0]))
    });
});

router.post('/', (req, res) => {
    // add new admin
});

router.get('/:id/menus', (req, res) => {
    // return all menus of admin id
})

router.get('/:id/plats', (req, res) => {
    // return all plats of admin id
})

module.exports = router;