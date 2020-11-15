const ajouter_plat = (params) => {

    const { nom, type, prix } = params;

    return (`insert into plat (nom, type, prix) values ('${nom}','${type}',${prix})`)


}

const ajouter_ingrediants_plat = (idPlat, params) => {

    const ingrediants = params;

    var query = `insert into composer (idPlat ,idIngrediant,quantite,unite) values `;

    ingrediants.forEach(ing => {
        query += `(${idPlat}, ${ing.idIngrediant},${ing.quantite},'${ing.unite}'),`

    })

    return query.substr(0, query.length - 1);


}

module.exports = { ajouter_plat, ajouter_ingrediants_plat };