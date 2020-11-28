module.exports = ({id, nom, prix, fixe, type, choix, ingrediants}) => {
    nom = nom.replace("'", "");
    return `update plat set nom='${nom}', prix=${prix}, fixe=${fixe} where idPlat=${id};
            delete from entree where idPlat=${id};
            delete from principal where idPlat=${id};
            delete from dessert where idPlat=${id};
            insert into ${type}(idPlat ${type!=="dessert"?", type": ''}) values
                (${id} ${type==="dessert"?'': choix === "null"?`, NULL`:`, '${choix}'`});
            delete from composer where idPlat=${id};
            ${ingrediants.length !== 0 ? `insert into composer(idPlat, idIngrediant)  values
            ${ingrediants.map(e => `(${id}, ${e})`).join(',')}`: ''};
            `
}