const connection = require('../connection')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')
const { nomPass } = require('../requets/admin/select')

module.exports = (req, res) => {

    
    const { nomAdmin, motDePasse } = req.body;

    // encrypt the password

    connection.query(nomPass(nomAdmin, motDePasse), (err, result) => {
        if (err) return res.status(501).json(err);

        if (!result.length) {
            return res.json({msg: 'invalid nom/pass', status: 401});
        } else {
            const token = jwt.sign({id: result[0].id}, JWT_SECRET, {algorithm: "HS256"});
            return res.json({msg: 'login success.', status: 200, token: token});
        }
    });
    
}