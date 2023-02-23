//Conexión a MySQL con Sequelize
const { Sequelize } = require('sequelize');
const fs = require('fs');



const pool = new Sequelize(
    'BugueUsers',
    process.env.USER,
    process.env.PASS, {
    host: process.env.HOST,
    port: 3306,
    dialect: 'mysql',
   //dialectOptions: {  ssl: {
   //     ca: serverCa
   //  }},
    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
);

/*
const serverCa = fs.readFile(`${__dirname}/DigiCertGlobalRootCA.crt.pem`, 'utf8', (err, data) => {
     if (err) {
      console.error(err);
      return;
    }
    console.log('ssl cert sent');
  });
  */

module.exports = pool;
