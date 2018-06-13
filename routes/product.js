const pg = require('pg');
const path = require('path');
var express = require('express');
var router = express.Router();
const connectionString = process.env.DATABASE_URL || 'postgres://e-commerce:aakash12@localhost:5432/e-commerce';

router.get('/product-overview', (req, res, next) => {
  const results = [];
  const category = req.query.id || 'all';
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500);
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM product WHERE category @> ARRAY[($1)] ORDER BY no ASC;',[category]);
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      // console.log(results);
      return res.json(results);
    });
  });
});

module.exports = router;

//select * from product;
// insert into product(no,category,title,actual_price,description,images) values(2, ARRAY ['all','women'],'test',35,'desction','https://i.ytimg.com/vi/hYvkSHYh_WQ/hqdefault.jpg');
