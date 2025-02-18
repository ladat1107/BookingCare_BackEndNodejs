require('dotenv').config();
module.export =
{
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DN_NAME,
    "host": process.env.HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DB_DIALECT,
    "logging": false,
    "dialectOptions": {
      "useUTC": false
    },
    "timezone": "+07:00",
    "query": {
      "raw": true,
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}