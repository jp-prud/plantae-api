const db = require('../../database');

class ConsumerRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT * FROM consumer
    `);

    return rows;
  }

  async findById(id) {
    const [rows] = await db.query(
      `
    SELECT *
    FROM consumer
    WHERE id = $1
  `,
      [id],
    );

    return rows;
  }

  async findByName(name) {
    const [rows] = await db.query(
      `
      SELECT * FROM consumer
      WHERE name = $1
    `,
      [name],
    );

    return rows;
  }

  async findByEmail(email) {
    const [rows] = await db.query(
      `
    SELECT * FROM consumer
    WHERE email = $1
  `,
      [email],
    );

    return rows;
  }

  async create({ name, email, phone, password }) {
    const [rows] = await db.query(
      `
      INSERT INTO consumer(name, email, phone, password)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `,
      [name, email, phone, password],
    );

    return rows;
  }

  async update(id, { name, email, phone, password }) {
    const [rows] = await db.query(
      `
      UPDATE consumer
      SET
        name = $2, email = $3, phone = $4,
        password = $5
      WHERE id = $1
      RETURNING *
    `,
      [id, name, email, phone, password],
    );

    return rows;
  }

  async delete(id) {
    const [rows] = await db.query(
      `
      DELETE FROM consumer
      WHERE id = $1
      RETURNING *
    `,
      [id],
    );

    return rows;
  }
}

module.exports = new ConsumerRepository();
