const fs = require('fs');
const path = require('path')

// get all files in current directory minus this file
const files = fs
    .readdirSync(__dirname)
    .filter(e => e != path.basename(__filename));

module.exports = app => {
    // add all routes to app
    return files.map(element => {
        let ext = path.extname(element);
        let filename = path.basename(element).replace(ext, '');
        return {
            path: filename,
            router: require(path.resolve(__dirname, element))
        }
    });
}