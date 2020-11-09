const router = require('express').Router();
const connection = require('../connection')
const { menu } = require('../requets/select');
const plats = require('../requets/select_plats_id_menu');
const ingrediant_menu = require('../requets/ingrediants_from_menu')
const route = require('./plats');


//----------------------------------------------------GET-------------------------------------------------

router.get('/', (req, res) => {
    // get all menus
    connection.query(menu(), (err, results) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({ err }))
        }
        res.send(JSON.stringify(results))
    });
});


router.get('/:id', (req, res) => {
    // get menu of id
    connection.query(menu() + ' where idMenu=' + req.params.id, (err, results) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({ err }))
        }
        res.send(JSON.stringify(results[0]))
    });
});

router.get('/:id/plats', (req, res) => {
    // get all plats of menu id
    connection.query(plats(req.params.id), (err, results) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({ err }))
        }
        res.send(JSON.stringify(results))
    });
});

router.get('/date/:date', (req, res) => {
    //get menu by date
    const date = req.params.date;

    connection.query(menu(date), (err, results) => {
        if (err) {
            res.status(400);
            throw err;
        }

        res.send(JSON.stringify(results))
    })
});

router.get('/:id/ingrediants', (req, res) => {
    //get ingrediants of menu 

    const id = req.params.id
    connection.query(ingrediant_menu(id), (err, results) => {
        if (err) {
            res.status(400);
            throw err
        }

        res.send(JSON.stringify(results))
    })

})

//-----------------------------------------------POST---------------------------------------

router.post('/', (req, res) => {
    // add new menu
});

module.exports = router;