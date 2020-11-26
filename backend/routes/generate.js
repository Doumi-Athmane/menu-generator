const router = require('express').Router();
const connection = require('../connection')
const generate = require('../requets/generer_menu')

router.post('/' , (req,res)=> {

    const {idPlats} = req.body;
    

    connection.query(generate('entree' , idPlats), (err , results1)=>{
        if (err) {
            res.status(400);
            res.json({err})
        } else {
            
            connection.query(generate('principal' ,idPlats),(err,results2)=>{
                if (err) {
                    res.status(400);
                    res.json({err});
                }else {
                    connection.query(generate('dessert',idPlats),(err,results3)=>{
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

module.exports = router;