const pg = require('pg');
const path = require('path');
const requestIp = require('request-ip');
var express = require('express');
var router = express.Router();
const connectionString = process.env.DATABASE_URL || 'postgres://e-commerce:aakash12@localhost:5432/e-commerce';

router.post('/', (req, res, next) => {
  var ipAddress;
  const clientIp = getClientIp(req);
  const productID = req.body.p_id || 1;
  const results = [];
  pg.connect(connectionString, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500);
    }
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM cart WHERE ip_add=($1) AND p_id=($2);', [clientIp, productID]);
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();

      if (results.lenght > 0){

      } else {
        const query = client.query('INSERT INTO cart(ip_add, qty, p_id) values($1, $2, $3)', [clientIp, 1, productID]);
        // Stream results back one row at a time
        query.on('row', (row) => {
          results.push(row);
        });
        // After all data is returned, close connection and return results
        query.on('end', () => {
          done();
          res.redirect('/cart/count');
      });
    }
    });
  });
});

router.get('/count', (req, res, next) => {
  const results = [];
  const clientIp = getClientIp(req);
  // Get a Postgres client from the connection pool
  pg.connect(connectionString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query('SELECT COUNT(*) FROM cart WHERE ip_add=($1);' ,[clientIp]);
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return JSON.parse(res._body);
    });
  });
});


function getClientIp(req) {
// The request may be forwarded from local web server.
var ipAddress;
var forwardedIpsStr = req.header('x-forwarded-for');
if (forwardedIpsStr) {
  // 'x-forwarded-for' header may return multiple IP addresses in
  // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
  // the first one
  var forwardedIps = forwardedIpsStr.split(',');
  ipAddress = forwardedIps[0];
}
if (!ipAddress) {
  // If request was not forwarded
  ipAddress = req.connection.remoteAddress;
}
return ipAddress;
};

module.exports = router;
