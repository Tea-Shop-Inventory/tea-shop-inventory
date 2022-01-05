const express = require('express'),
  router = express.Router();

// get tea lists
router.get('/', function(req, res) {
  /*let sql = `SELECT * FROM tea`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "tea lists retrieved successfully"
    })
  })*/
  res.json({message:"Test message"})
});

// create new tea
router.post('/new', function(req, res) {
  let sql = `INSERT INTO tea(name, brand, type, type, quantity, description) VALUES (?)`;
  let values = [
    req.body.name,
    req.body.brand,
    req.body.type,
    req.body.quantity,
    req.body.description,
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New tea added successfully"
    })
  })
});

module.exports = router;