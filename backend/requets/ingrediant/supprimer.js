var supprimer_ingrediant = (idIngrediant) => {
    return `delete from ingrediant where idIngrediant = ${idIngrediant}`
}

module.exports = supprimer_ingrediant;