var supprimer_plat = (idPlats) => {
    return `delete from plats where idPlat = ${idPlats}`
}

module.exports = supprimer_plat;