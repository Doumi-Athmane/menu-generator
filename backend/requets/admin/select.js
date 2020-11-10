module.exports = {
        admin: id => `select * from admins ${id? `where idAdmin=${id}`: ''}`
}