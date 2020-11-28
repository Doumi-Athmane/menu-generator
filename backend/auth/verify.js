const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    // Gather the jwt access token from the request header
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.json({status: 401}) // if there isn't any token

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) { 
            
             return res.json({status: 403})
        }
        req.user = user
        res.json({status:200});
    })
}