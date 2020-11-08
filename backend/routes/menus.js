const router = require('express').Router();
const connection = require('../connection')
const { menu } = require('../requets/select');
const plats = require('../requets/select_plats_id_menu');

router.get('/', (req, res) => {
    // get all menus
    connection.query(menu(), (err, results) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({err}))
        }
        res.send(JSON.stringify(results))
    });
});

router.post('/', (req, res) => {
    // add new menu
});

router.get('/:id', (req, res) => {
    // get menu of id
    connection.query(menu()+' where idMenu='+req.params.id, (err, results) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({err}))
        }
        res.send(JSON.stringify(results[0]))
    });
});

router.get('/:id/plats', (req, res) => {
    // get all plats of menu id
    connection.query(plats(req.params.id), (err, results) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({err}))
        }
        res.send(JSON.stringify(results))
    });
});

module.exports = router;