module.exports = ({id, nom, prix, fixe, type, choix, ingrediants}) => {
    return `update plat set nom='${nom}', prix=${prix}, fixe=${fixe} where idPlat=${id};
            delete from entree where idPlat=${id};
            delete from principal where idPlat=${id};
            delete from dessert where idPlat=${id};
            insert into ${type}(idPlat ${type==="principal"?", type": ''}) values
                (${id} ${type==="principal"?`, '${choix}'`: ''});
            delete from composer where idPlat=${id};
            insert into composer(idPlat, idIngrediant)  values
            ${ingrediants.map(e => `(${id}, ${e})`).join(',')};
            `
}