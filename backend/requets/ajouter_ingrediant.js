var ajouter_ingrediant = (nomIngrediant) => {



    return `insert into ingrediants (nomIngrediant) values ('${nomIngrediant}')`

}

module.exports = ajouter_ingrediant;