var ajouter_ingrediant = (nomIngrediant) => {

    return `insert into ingrediant (nomIngrediant) values ('${nomIngrediant}')`

}

module.exports = ajouter_ingrediant;