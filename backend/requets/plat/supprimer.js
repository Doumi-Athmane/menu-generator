var supprimer_plat = (idPlat) => {
    return `delete from plat where idPlat = ${idPlat}`
}

module.exports = supprimer_plat;