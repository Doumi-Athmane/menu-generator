module.exports = (nom, prenom, motDePasse) => {
    return `insert into admins(nomAdmin, prenom, motDePasse) values ('${nom}', '${prenom}', '${motDePasse}')`
}