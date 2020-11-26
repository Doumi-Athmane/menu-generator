module.exports = (type) => {
    if (type == 'principal'){
        return `select * from plat natural join principal
                where idPlat not in (
                    select idPlat from contient c natural join menu
                    where DATEDIFF(now(), date) < ${process.env.NB_DAY_MAX}
                )`
    }
    else {
        return `select * from plat 
                natural join ${type} 
                where fixe = 1 
                union 
                select * from plat 
                natural join ${type}
                where idPlat not in (
                    select idPlat from contient c natural join menu
                    where DATEDIFF(now(), date) < ${process.env.NB_DAY_MAX}  
                )`
    }
}