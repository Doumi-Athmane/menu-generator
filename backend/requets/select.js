module.exports = {
    principals: () => `select * from plats where type='p'`,
    desserts: () => `select * from plats where type='d'`,
    entrees: () => `select * from plats where type='e'`,
    menu: () => `select * from menu`,
}