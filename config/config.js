require('dotenv').config()

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "port": process.env.DB_PORT,
        "dialect": process.env.DIALECT,
        "secret": process.env.AUTH_SECRET,
        "aws_bucket_name":process.env.AWS_BUCKET_NAME,
        "aws_access_key_id":process.env.AWS_ACCESS_KEY_ID,
        "aws_secret_access_key":process.env.AWS_SECRET_ACCESS_KEY,
        "user_test_access_key":process.env.USER_TEST_ACCESS_TOKEN,
        "user_test_public_key":process.env.USER_TEST_PUBLIC_KEY
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "secret": process.env.AUTH_SECRET,
        "dialect": process.env.DIALECT
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": process.env.DIALECT
    }
}