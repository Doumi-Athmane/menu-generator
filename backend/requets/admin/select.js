module.exports = {
        admin: id => `select * from admin ${id? `where idAdmin=${id}`: ''}`,
        nomPass: (nom, motDePasse) => `select idAdmin id from admin where nomAdmin='${nom}' and motDePasse='${motDePasse}'`
}