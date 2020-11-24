module.exports = (type, idPlats) => {
    
    
    

                if (type == 'principal'){
                    return `(select * from plat natural join principal 
                            where type = 'poulet'
                            and idPlat not in (
                                select idPlat from contient c natural join menu
                                where DATEDIFF(now(), date) < 7
                            )
                            ${idPlats  !== '' ? `and idPlat not in (${idPlats})`: ''} 
                            order by rand() limit 1)
                            union
                            (select * from plat natural join principal 
                            where type = 'viande'
                            and idPlat not in (
                                select idPlat from contient c natural join menu
                                where DATEDIFF(now(), date) < 7
                            ) 
                            ${idPlats !== '' ? `and idPlat not in (${idPlats})`: ''}
                            order by rand() limit 1)`
                }
                else {
                    return `(select * from plat 
                            natural join ${type} 
                            where fixe = 1 
                            ${idPlats  !== '' ? `and idPlat not in (${idPlats})`: ''})
                            union 
                            (select * from plat 
                            natural join ${type}
                            where idPlat not in (
                                select idPlat from contient c natural join menu
                                where DATEDIFF(now(), date) < 7  
                            )
                            ${idPlats  !== ''? `and idPlat not in (${idPlats})`: ''}
                            order by rand() limit 3)`}
     
     
     
     
     
     

}