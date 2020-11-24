module.exports = (idplat) => {

    return `select distinct i.* from 
            ingrediant i 
            natural join (
                select * from composer c 
                where c.idPlat in (${idplat})
            )f;`
}