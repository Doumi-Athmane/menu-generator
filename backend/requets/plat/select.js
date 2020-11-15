module.exports = {
        plats: type => `select * from plat ${type? `where type='${type}'`: ''}`
}