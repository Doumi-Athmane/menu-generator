const route = require('express').Router();
const connection = require('../connection');
const { plats } = require('../requets/select');
const ingrediantDePlat = require('../requets/select_ingrediant_de_plat');
const ajouter = require('../requets/ajouter_plat');
const supprimer = require('../requets/supprimer_plat')
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();



//---------------------------------------------------------GET---------------------------------------------------
route.get('/', (req, res) => {
    // return tout les entrees de la table plats
    connection.query(plats(), (err, results, fields) => {

        //console.log(err, results, fields)

        if (err) {
            res.status(400);
            res.send(JSON.stringify({ err }))
        }

        res.send(JSON.stringify(results));
    });
});


route.get('/:id', (req, res) => {
    // deletes entry of id
    connection.query(plats() + " where idPlat=" + req.params.id, (err, results, fields) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({ err }))
        }
        res.send(JSON.stringify(results[0]));
    });
});

route.get('/:id/ingrediants', (req, res) => {
    // return all ingrediants of plat id
    connection.query(ingrediantDePlat(req.params.id), (err, results, fields) => {
        if (err) {
            res.status(400);
            res.send(JSON.stringify({ err }))
        }
        res.send(JSON.stringify(results));
    });
});

route.get('/type/:type', (req, res) => {
    //return all plat of one type 

    const type = req.params.type;
    connection.query(plats(type), (err, results, fields) => {
        if (err) {
            throw err;
            res.status(400)
        }
        res.send(JSON.stringify(results));
    })

})

route.get('/unused', (req, res) => {
    // return table entries according to some constrains
});



//--------------------------------------------------POST-------------------------------------- 
route.post('/', jsonParser, (req, res) => {
    //Insert a plat 
    const body = req.body;

    connection.query(ajouter(body), (err, results) => {

        if (err) {
            res.status(400);


            //throw err;
            res.send(JSON.stringify({ err }))
        }
        res.status(200).json({
            data: results
        });

        //res.send(JSON.stringify({ msg: 'entry added successfully.' })) ----------Hadi man3ref w3lach ki nkhaliha tdir err ?!! ----- 


    })
});

//-----------------------------------------------------DELETE----------------------------------------------

route.delete('/:id/del', (req, res) => {
    // delete plat with id 

    const id = req.params.id;

    connection.query(supprimer(id), (err, results) => {
        if (err) {
            res.status(400)
            res.send(JSON.stringify({ err }))
        }
        res.status(203).json({
            status: 'supperssion :) '
        })
    })
});

module.exports = route;