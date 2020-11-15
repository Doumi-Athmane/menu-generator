const route = require('express').Router();
const connection = require('../connection');
const { plats } = require('../requets/plat/select');
const ingrediantDePlat = require('../requets/plat/select_ingrediant');
const { ajouter_plat, ajouter_ingrediants_plat } = require('../requets/plat/ajouter');

const supprimer = require('../requets/plat/supprimer');




//---------------------------------------------------------GET---------------------------------------------------
route.get('/', (req, res) => {
    // return tout les entrees de la table plats

    connection.query(plats(req.query.type), (err, results) => {

        //console.log(err, results, fields)

        if (err) {
            res.status(400);
            res.json({ err })
        } else res.json(results);
    });
});


route.get('/:id', (req, res) => {
    // get plat by id
    connection.query(plats() + " where idPlat=" + req.params.id, (err, results) => {
        if (err) {
            res.status(400);
            res.json({ err })
        } else res.json(results[0]);
    });
});

route.get('/:id/ingrediant', (req, res) => {
    // return all ingrediants of plat id
    connection.query(ingrediantDePlat(req.params.id), (err, results) => {
        if (err) {
            res.status(400);
            res.json({ err })
        } else res.json(results);
    });
});



//--------------------------------------------------POST-------------------------------------- 
route.post('/', (req, res) => {
    //Insert a plat 
    const plat = req.body.plat;

    connection.query(ajouter_plat(plat), (err, results) => {

        if (err) {
            res.status(400);
            res.json({ err })
        } else {
            const ingrediants = req.body.ingrediants
            connection.query(ajouter_ingrediants_plat(results.insertId, ingrediants), (err, resulats) => {
                if (err) {
                    res.status(400);
                    res.json({ err })

                } else res.send(results)
            })
        }

    })
});

//-----------------------------------------------------DELETE----------------------------------------------

route.delete('/:id', (req, res) => {
    // delete plat with id 

    const id = req.params.id;

    connection.query(supprimer(id), (err, results) => {
        if (err) {
            res.status(400)
                .json({ err })
        } else res.status(203).json({ status: 'supperssion :) ' })
    })
});

module.exports = route;