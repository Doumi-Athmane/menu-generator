module.exports = {
    port: process.env.PORT,
    db_port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    JWT_SECRET: process.env.JWT_SECRET,
}