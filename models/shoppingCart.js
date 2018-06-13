const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://e-commerce:aakash12@localhost:5432/e-commerce';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE cart(no SERIAL PRIMARY KEY, ip_add VARCHAR(255) not null, qty INTEGER not null)');
query.on('end', () => { client.end(); });
