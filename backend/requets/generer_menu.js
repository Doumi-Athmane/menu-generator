module.exports = (type, idPlats) => {
    
    

                if (type == 'principal'){
                    return `(select * from plat natural join principal 
                            where type = 'poulet'
                            and idPlat not in (
                                select idPlat from contient c natural join menu
                                where DATEDIFF(now(), date) < ${process.env.NB_DAY_MAX}
                            )
                            ${idPlats  !== '' ? `and idPlat not in (${idPlats})`: ''} 
                            order by rand() limit 1)
                            union
                            (select * from plat natural join principal 
                            where type = 'viande'
                            and idPlat not in (
                                select idPlat from contient c natural join menu
                                where DATEDIFF(now(), date) < ${process.env.NB_DAY_MAX}
                            ) 
                            ${idPlats !== '' ? `and idPlat not in (${idPlats})`: ''}
                            order by rand() limit 1)`
                }
                else if(type == 'dessert'){
                    return `(select * from plat 
                            natural join ${type} 
                            where fixe = 1 
                            ${idPlats  !== '' ? `and idPlat not in (${idPlats})`: ''})
                            union 
                            (select * from plat 
                            natural join ${type}
                            where idPlat not in (
                                select idPlat from contient c natural join menu
                                where DATEDIFF(now(), date) < ${process.env.NB_DAY_MAX}  
                            )
                            ${idPlats  !== ''? `and idPlat not in (${idPlats})`: ''}
                            order by rand() limit 3)`
                }
               else if (type == 'entree'){
                    return `(select * from plat 
                        natural join ${type} 
                        where fixe = 1 
                        ${idPlats  !== '' ? `and idPlat not in (${idPlats})`: ''})
                        union 
                        (select * from plat 
                        natural join ${type}
                        where type = 'soupe'
                        and  idPlat not in (
                            select c.idPlat from contient c natural join menu
                            where DATEDIFF(now(), date) < ${process.env.NB_DAY_MAX}  
                        )
                        ${idPlats  !== ''? `and idPlat not in (${idPlats})`: ''}
                        order by rand() limit 1)
                        union
                        (select * from plat 
                            natural join ${type}
                            where type = 'salé'
                            and  idPlat not in (
                                select c.idPlat from contient c natural join menu
                                where DATEDIFF(now(), date) < ${process.env.NB_DAY_MAX}  
                            )
                            ${idPlats  !== ''? `and idPlat not in (${idPlats})`: ''}
                            order by rand() limit 1)
                        union
                        (select * from plat 
                            natural join ${type}
                            where type = 'gratin'
                            and  idPlat not in (
                                select c.idPlat from contient c natural join menu
                                where DATEDIFF(now(), date) < ${process.env.NB_DAY_MAX}  
                            )
                            ${idPlats  !== ''? `and idPlat not in (${idPlats})`: ''}
                            order by rand() limit 1)
                        `

                }
     
     
     
     
     
     

}