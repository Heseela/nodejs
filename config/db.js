const mysql = require("mysql2/promise");
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'college'

});

module.exports = connection

// let sql= "select * from students" ; 
// connection.execute(sql, (data)=>{
//     console.log(data)
// })

// connection.query(sql).then((data) => {
//   console.log(data)
// }).catch((error) => {
//   console.log(error)
// })