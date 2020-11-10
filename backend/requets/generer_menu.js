module.exports = (type, idPlats) => {
        return `select * from plats
            where idPlat not in (
                select idPlat from contient c natural join menu
                where DATEDIFF(now(), date) < 7
            ) 
            ${idPlats && `and idPlat not in (${idPlats.join(',')})`}
            and type = '${type}' 
            order by rand() limit 3`
}