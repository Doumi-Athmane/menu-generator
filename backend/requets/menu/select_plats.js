module.exports = (id, type) => {

    let requette = `select p.* 
            from plats p
            natural join contient c
            where c.idMenu= ${id}
            `;

    if (type)
        requette += `p.type=${type}`;

    return requette;

}