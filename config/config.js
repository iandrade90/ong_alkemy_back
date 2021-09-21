require('dotenv').config()

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database":  process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "dialect": process.env.DIALECT,
        "secret": process.env.AUTH_SECRET,
        "aws_bucket_name":"",
        "aws_access_key_id":process.env.AWS_ACCESS_KEY_ID,
        "aws_secret_access_key":process.env.AWS_SECRET_ACCESS_KEY
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