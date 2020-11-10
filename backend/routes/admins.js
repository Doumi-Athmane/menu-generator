const router = require('express').Router();
const connection = require('../connection');
const { admin } = require('../requets/admin/select')
const ajouter = require('../requets/admin/ajouter');

router.get('/:id', (req, res) => {
    // get admin of id
    connection.query(admin(req.params.id), (err, results) => {
        if (err) {
            res.status(400);
            res.json({ err })
        }
        res.json(results[0])
    });
});

router.post('/', (req, res) => {
    // add new admin
    const { nomAdmin, prenom, motDePasse } = req.body;
    connection.query(ajouter(nomAdmin, prenom, motDePasse), (err, results) => {
        if (err) {
            res.status(400);
            res.json({ err })
        } else {
            res.json(results)
        }
    });
});

router.get('/:id/menus', (req, res) => {
    // return all menus of admin id
})

router.get('/:id/plats', (req, res) => {
    // return all plats of admin id
})

module.exports = router;