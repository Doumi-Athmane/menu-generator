module.exports = {
        ingrediants: id => `select * from ingrediants ${id? `where idIngrediants=${id}`: ''}`
}