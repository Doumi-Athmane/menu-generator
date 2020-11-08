const fs = require('fs');
const path = require('path');
const router = require('express').Router();

// get all files in current directory minus this file
const files = fs
    .readdirSync(__dirname)
    .filter(e => e != path.basename(__filename));

module.exports = () => {
    // add all routes to router
    files.forEach(element => {
        let ext = path.extname(element);
        let filename = path.basename(element).replace(ext, '');
        router.use('/' + filename, require(path.resolve(__dirname, element)));
    });

    router.get('/', (req, res) => {
        res.send('test');
    });

    return router;
}