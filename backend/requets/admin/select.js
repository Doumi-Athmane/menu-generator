module.exports = {
        admin: id => `select * from admins ${id? `where idAdmin=${id}`: ''}`,
        nomPass: (nom, motDePasse) => `select idAdmin id from admins where nomAdmin='${nom}' and motDePasse='${motDePasse}'`
}