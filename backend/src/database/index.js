const { Client } = require("pg");

const consumer = new Client({
  host: "localhost",
  port: 5432,
  user: "root",
  password: "root",
  database: "plantae",
});

consumer.connect();

exports.query = async (query, values) => {
  const { rows } = await consumer.query(query, values);
  return rows;
};
