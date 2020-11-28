const ajouter_plat = ({ nom, prix ,fixe}) => {
    nom = nom.replace("'", "")
    return `insert into plat (nom, prix, fixe) values ('${nom}',${prix},${fixe})`


}

const ajouter_type_plat = (idPlat ,type ,choix) => {
    if(type == 'entree'){
        if (choix === "null")
            return (`insert into entree (idPlat ,type) values (${idPlat} , NULL) `)

        return (`insert into entree (idPlat ,type) values (${idPlat} ,'${choix}') `)
    } else if (type == 'principal') {
        return (`insert into principal (idPlat,type) values (${idPlat},'${choix}') `)
    } else if ( type == 'dessert'){
        return (`insert into dessert (idPlat) values (${idPlat}) `)
    }
}

const ajouter_ingrediants_plat = (idPlat, ingrediants) => {

    return `insert into composer (idPlat ,idIngrediant) values ${ingrediants.map(e => `(${idPlat}, ${e})`).join(',')}`;

}

module.exports = { ajouter_plat, ajouter_ingrediants_plat ,ajouter_type_plat };