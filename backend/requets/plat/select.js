module.exports = {
        plats: type => `select * from plats ${type? `where type='${type}'`: ''}`
}