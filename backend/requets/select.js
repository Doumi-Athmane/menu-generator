module.exports = {
    plats: type => `select * from plats ${type? `where type='${type}'`: ''}`,
    ingrediants: id => `select * from ingrediants ${id? `where idIngrediants=${id}`: ''}`,
    menu: date => `select * from menu ${date? `where date='${date}'`: ''}`,
    admin: id => `select * from admins ${id? `where idAdmin=${id}`: ''}`
}