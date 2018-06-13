const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://e-commerce:aakash12@localhost:5432/e-commerce';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE category(no SERIAL PRIMARY KEY, category VARCHAR(150) not null)');
query.on('end', () => { client.end(); });
