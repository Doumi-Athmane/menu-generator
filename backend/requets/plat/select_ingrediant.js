module.exports = id => {
        return `select distinct i.*
            from ingrediant i
            natural join composer c 
            ${id? `where idPlat=${id}`: ''} 
            order by idPlat`
}