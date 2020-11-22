module.exports = (type, idPlats) => {
      /*  return `select * from plat
            where idPlat not in (
                select idPlat from contient c natural join menu
                where DATEDIFF(now(), date) < 7
            ) 
            ${idPlats ? `and idPlat not in (${idPlats.join(',')})`: ''}
            and type = '${type}' 
            order by rand() limit 3`*/



                if (type == 'principal'){
                    return `(select * from plat natural join principal 
                            where type = 'poulet'
                            and idPlat not in (
                                select idPlat from contient c natural join menu
                                where DATEDIFF(now(), date) < 7
                            ) 
                            ${idPlats ? `and idPlat not in (${idPlats.join(',')})`: ''}
                            order by rand() limit 1)
                            union
                            (select * from plat natural join principal 
                            where type = 'viande'
                            and idPlat not in (
                                select idPlat from contient c natural join menu
                                where DATEDIFF(now(), date) < 7
                            ) 
                            ${idPlats ? `and idPlat not in (${idPlats.join(',')})`: ''}
                            order by rand() limit 1)`
                }
                else {
                    return `(select * from plat 
                            natural join ${type} 
                            where fixe = 1 
                            ${idPlats ? `and idPlat not in (${idPlats.join(',')})`: ''})
                            union 
                            (select * from plat 
                            natural join ${type}
                            where idPlat not in (
                                select idPlat from contient c natural join menu
                                where DATEDIFF(now(), date) < 7  
                            )
                            ${idPlats ? `and idPlat not in (${idPlats.join(',')})`: ''}
                            order by rand() limit 3)`}
     
     
     
     
     
     
     
     
     
     
                /* return `select * from plat 
                natural join ${type} 
                where fixe = 1 
                ${idPlats ? `and idPlat not in (${idPlats.join(',')})`: ''}
                union 
                select * from plat 
                natural join ${type}
                where idPlat not in (
                    select idPlat from contient c natural join menu
                    where DATEDIFF(now(), date) < 7  
                )
                ${idPlats ? `and idPlat not in (${idPlats.join(',')})`: ''}
                oreder by rand() limit 3
            `


            `select * from plat natural join principal 
            where type = ${choix} 
            and idPlat not in (
                select idPlat from contient c natural join menu
                where DATEDIFF(now(), date) < 7
            ) 
            ${idPlats ? `and idPlat not in (${idPlats.join(',')})`: ''}
            oreder by rand() limit 1`*/
}