const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://e-commerce:aakash12@localhost:5432/e-commerce';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE brand(no SERIAL PRIMARY KEY, brand_title VARCHAR(150) not null)');
query.on('end', () => { client.end(); });
