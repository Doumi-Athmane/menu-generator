module.exports = (id ,type) => {

    return `select p.* 
    from plat p
       natural join (
         ${type} natural join (
            select * from contient c 
            where c.idMenu= ${id}
            )d 
        )
        
    `;

}
