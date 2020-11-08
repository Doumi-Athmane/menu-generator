module.exports = id => {
    return `select *
            from ingrediants 
            natural join (
                select * 
                from plats p 
                natural join composer c 
                where idPlat=${id}
            ) d 
            order by idPlat`
}