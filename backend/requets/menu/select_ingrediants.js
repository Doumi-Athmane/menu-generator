module.exports = (id) => {

    return `select distinct i.* from 
        ingrediant i 
            natural join (
                composer  natural join (
                select * from contient con
                where con.idMenu = ${id}
            ) f
        );`
}