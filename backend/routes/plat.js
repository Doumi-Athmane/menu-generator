const route = require('express').Router();
const connection = require('../connection');
const { plats } = require('../requets/plat/select');
const platsNotInMenu = require('../requets/plat/select_not_in_menu');
const ingrediantDePlat = require('../requets/plat/select_ingrediant');
const { ajouter_plat, ajouter_ingrediants_plat , ajouter_type_plat} = require('../requets/plat/ajouter');
const modifier = require('../requets/plat/modifier')

const supprimer = require('../requets/plat/supprimer');




//---------------------------------------------------------GET---------------------------------------------------
route.get('/', (req, res) => {
    // return tout les entrees de la table plats

    connection.query(plats(req.query.type), (err, results) => {

        if (err) {
            res.status(400);
            res.json({ err })
        } else res.json(results);
    });
});

route.get('/menu', (req, res) => {
    connection.query(platsNotInMenu('entree'), (err , results1)=>{
        if (err) {
            res.status(400);
            res.json({err})
        }else {
            connection.query(platsNotInMenu('principal'),(err,results2)=>{
                if (err) {
                    res.status(400);
                    res.json({err});
                }else {
                    connection.query(platsNotInMenu('dessert'),(err,results3)=>{
                        if (err) {
                            res.status(400);
                            res.json({err})
                        }else {
                            res.json({
                                entree : results1,
                                principal : results2,
                                dessert : results3
                            })
                        }
                    })
                }
            })
        }
    })
})

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
    const type = req.body.type;
    const choix = req.body.choix;

    connection.query(ajouter_plat(plat), (err, results) => {

        if (err) {
            res.status(400);
            res.json({ err, results })
        } else {

            connection.query(ajouter_type_plat(results.insertId,type,choix),(err,results2)=> {
                if (err) {
                    res.status(400);
                    res.json({ err, results2 })
                }else {
                    const ingrediants = req.body.ingrediants
                    connection.query(ajouter_ingrediants_plat(results.insertId, ingrediants), (err, results3) => {
                        if (err) {
                            res.status(400);
                            res.json({ err, results3 })

                        } else res.send(results3)
                    })
                }
            })
            
        }

    })
});

route.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nom, prix, type, choix, fixe, ingrediants } = req.body;

    connection.query(modifier({id, nom, prix, fixe, type, choix, ingrediants}), (err, results) => {
        if (err) {
            res.status(400).json(err)
            return;
        }
        res.status(202).json(results)
    })
})

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