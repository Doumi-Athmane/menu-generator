const menu = () => `delete from menu where date = ADDDATE(CURDATE(), 1);
                    insert into menu(date) values (ADDDATE(CURDATE(), 1))`;

const plats_menu = (idMenu, idPlats) => {
    let query = "insert into contient values ";

    idPlats.forEach(e => {
        query += `(${e}, ${idMenu}),`
    });

    return query.slice(0, -1);
}

module.exports = {
    menu,
    plats_menu
}