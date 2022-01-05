var mysql = require('mysql');

var con = mysql.createConnection({
  host: "tea-shop-inventory.clytprcklf67.us-east-2.rds.amazonaws.com",
  user: "Tea_Shop1",
  password: "lc101Project",
  database: "tea-shop-inventory"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE users (id SMALLINT UNASIGNED AUTO_INCREMENT PRIMARY KEY, username VARCHAR(30) NOT NULL, password VARCHAR(30)) NOT NULL";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });