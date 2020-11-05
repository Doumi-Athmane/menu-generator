const { port } = require('./config')
const app = require('express')();
const getRoutes = require('./routes')

getRoutes().forEach(e => {
    app.use('/' + e.path, e.router)
})

app.listen(port, () => console.log('server started at ' + port))