const db = require("../../database");

class ProductRepository {
  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";

    const rows = await db.query(`
      SELECT *
      FROM quality_seal
      ORDER BY quality_seal.name ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [rows] = await db.query(
      `
    SELECT *
    FROM quality_seal
    WHERE id = $1
  `,
      [id]
    );

    return rows;
  }

  async findByName(name) {
    const [rows] = await db.query(
      `
      SELECT * FROM quality_seal
      WHERE name = $1
    `,
      [name]
    );

    return rows;
  }

  async create({ name, image }) {
    const [rows] = await db.query(
      `
      INSERT INTO quality_seal(name, image)
      VALUES($1, $2)
      RETURNING *
    `,
      [name, image]
    );

    return rows;
  }

  async update(id, { name, image }) {
    const [rows] = await db.query(
      `
      UPDATE quality_seal
      SET
        name = $2, image = $3
      WHERE id = $1
      RETURNING *
    `,
      [id, name, image]
    );

    return rows;
  }

  async delete(id) {
    const [rows] = await db.query(
      `
      DELETE FROM quality_seal
      WHERE id = $1
      RETURNING *
    `,
      [id]
    );

    return rows;
  }
}

module.exports = new ProductRepository();
