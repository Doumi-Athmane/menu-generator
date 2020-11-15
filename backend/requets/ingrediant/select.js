module.exports = {
        ingrediants: id => `select * from ingrediant ${id? `where idIngrediant=${id}`: ''}`
}