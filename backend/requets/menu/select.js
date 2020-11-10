module.exports = {
        menu: query => {
                query = query || {};
                const date1 = query.date1 || null;
                const date2 = query.date2 || null;
                if (date2 === null) {
                    return `select * from menu ${date1? `where date='${date1}'`: ''}`
                }
                else{
                        return `select * from menu where date >= '${date1}' and date <='${date2}' `   
                }
        }
}