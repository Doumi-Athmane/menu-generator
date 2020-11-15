const router = require('express').Router();
const connection = require('../connection')
const { menu } = require('../requets/menu/select');
const plats = require('../requets/menu/select_plats');
const ingrediant_menu = require('../requets/menu/select_ingrediants')
const ajouter = require('../requets/menu/ajouter');



//----------------------------------------------------GET-------------------------------------------------

router.get('/', (req, res) => {
    // get all menus
    connection.query(menu(req.query), (err, results) => {
        if (err) {
            res.status(400);
            res.json({ err })
        } else res.json(results)
    });
});

router.get('/', (req, res) => {
    //menus entre deux date

    connection.query(menubtw(req.query.date1, req.query.date2), (err, results) => {
        console.log(req.query.date)
        if (err) {
            res.status(400);
            res.json({ err })
        } else res.json(results)

    });
});


router.get('/:id', (req, res) => {
    // get menu of id
    connection.query(menu() + ' where idMenu=' + req.params.id, (err, results) => {
        if (err) {
            res.status(400);
            res.json({ err })
        } else res.json(results[0])
    });
});


router.get('/:id/plat', (req, res) => {
    // get all plats of menu id
    connection.query(plats(req.params.id), (err, results) => {
        if (err) {
            res.status(400);
            res.json({ err })
        } else res.json(results)
    });
});



router.get('/:id/ingrediant', (req, res) => {
    //get ingrediants of menu 

    const id = req.params.id
    connection.query(ingrediant_menu(id), (err, results) => {
        if (err) {
            res.status(400);
            res.json({ err })

        } else res.send(results)
    })

})

//-----------------------------------------------POST---------------------------------------

router.post('/', (req, res) => {
    connection.query(ajouter.menu(), (err, results) => {
        if (err) {
            res.status(400);
            res.json({ err })

        } else {
            connection.query(ajouter.plats_menu(results.insertId, req.body), (err, results) => {
                if (err) {
                    res.status(400);
                    res.json({ err })

                } else res.send(results)
            })
        }
    })
});

module.exports = router;