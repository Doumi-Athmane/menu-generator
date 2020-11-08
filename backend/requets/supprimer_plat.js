var supprimer_plat = (idPlats) => {
    return `delete from plats where idPlats =${idPlats}`
}

module.exports = supprimer_plat;