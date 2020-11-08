var ajouter_plat = (nom, type, prix) => {

    return `insert into plats (nom, type, prix) values (${nom},${type},${prix})`

}

module.exports = ajouter_plat;