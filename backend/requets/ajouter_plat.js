var ajouter_plat = (params) => {

    const { nom, type, prix } = params;

    return `insert into plats (nom, type, prix) values ('${nom}','${type}',${prix})`


}

module.exports = ajouter_plat;