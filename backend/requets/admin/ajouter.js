module.exports = (nom, prenom, motDePasse) => {
    return `insert into admin(nomAdmin, prenom, motDePasse) values ('${nom}', '${prenom}', '${motDePasse}')`
}