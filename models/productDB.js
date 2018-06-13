const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://e-commerce:aakash12@localhost:5432/e-commerce';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE product(no SERIAL PRIMARY KEY, category TEXT [] not null, title VARCHAR(150) not null,actual_price INTEGER not null,sale_price INTEGER,description VARCHAR(1000) not null,images VARCHAR(1500) not null)');
query.on('end', () => { client.end(); });
