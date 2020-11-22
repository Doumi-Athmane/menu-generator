module.exports = {
        
        plats : type => `select * from plat p ${type ? `natural join ${type}` : ''}`
}