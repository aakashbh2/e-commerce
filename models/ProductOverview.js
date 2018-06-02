
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://e-commerce:aakash12@localhost:5432/e-commerce';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE productoverview(no SERIAL PRIMARY KEY, title VARCHAR(150) not null, actual_price INTEGER not null,sale_price INTEGER)');
query.on('end', () => { client.end(); });
