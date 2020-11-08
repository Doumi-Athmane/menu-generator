module.exports = id => {

    return `select p.* 
            from plats p
            natural join contient c
            where c.idMenu= ${id}
            `

}