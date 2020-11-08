module.exports = {
    plats: type => `select * from plats ${type? `where type='${type}'`: ''}`,
    menu: date => `select * from menu ${date? `where date='${date}'`: ''}`,
}