const express = require('express');
const router = express.Router();

// get user lists
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM users`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully"
    })
  })
});

// create new user
router.post('/new', function(req, res) {
  let sql = `INSERT INTO users(name, username, password) VALUES (?)`;
  let values = [
    req.body.name,
    req.body.username,
    req.body.password
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New user added successfully"
    })
  })
});

// 1) Receive POST request containing the usernam and password from the login form


// 2) Try to lookup Usernam in database
//    - If there is no match, return an error -- HTTP 401: Also return error message on the response "Could not find matching username"
//    - if there is a match....

// 3) Loockup password for the corresponding username and compare to the password sent with the request
//    - If the pw's don't match, return an error
//    - If the pw's do match

// 4) Send success 


module.exports = router;