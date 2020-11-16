const ajouter_plat = (params) => {

    const { nom, prix ,fixe} = params.plat;

    return (`insert into plat (nom, prix, fixe) values ('${nom}',${prix},${fixe})`)


}

const ajouter_type_plat = (idPlat ,typee ,choixx) => {
    const type = typee 
    const choix = choixx
    if(type == 'entree'){
        return (`insert into entree (idPlat) values (${idPlat}) `)
    } else if (type == 'principal') {
        return (`insert into principal (idPlat,type) values (${idPlat},'${choix}') `)
    } else if ( type == 'dessert'){
        return (`insert into dessert (idPlat) values (${idPlat}) `)
    }
}

const ajouter_ingrediants_plat = (idPlat, params) => {

    const ingrediants = params;

    var query = `insert into composer (idPlat ,idIngrediant,quantite,unite) values `;

    ingrediants.forEach(ing => {
        query += `(${idPlat}, ${ing.idIngrediant},${ing.quantite},'${ing.unite}'),`

    })

    return query.substr(0, query.length - 1);


}

module.exports = { ajouter_plat, ajouter_ingrediants_plat ,ajouter_type_plat };