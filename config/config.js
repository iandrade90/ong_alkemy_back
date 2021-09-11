require('dotenv').config()

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":  process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "secret": process.env.AUTH_SECRET,
        "bucketname":process.env.AWS_BUKET_NAME,
        "accessKeyId":process.env.AWS_ACCESS_KEY_ID,
        "secretAccessKey":process.env.AWS_SECRET_ACCESS_KEY,
        "dialect": "mysql"
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "secret": process.env.AUTH_SECRET,
        "dialect": "postgres"
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "secret": process.env.AUTH_SECRET,
        "dialect": "postgres"
    }
}