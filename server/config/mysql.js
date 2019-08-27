
// NB! vigtigt med promise, async og await

const mysql = require('mysql2/promise'); // mysql

module.exports = {
   connect: async function () {
      return await mysql.createConnection({
        // BEMÆRK AT KODEN ER GENERISK, PASSWORD MV SKAL TILRETTES.
         host: 'localhost',
         user: 'root',
         // min phpadmin server har pt ikke et password, indsæt tom string
         password: '',
         port: '3306',
         database: 'portofolio'
      })
   }
}