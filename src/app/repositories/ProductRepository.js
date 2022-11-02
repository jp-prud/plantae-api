const db = require("../../database");

class ProductRepository {
  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";

    const rows = await db.query(`
      SELECT *
      FROM product
      ORDER BY product.name ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [rows] = await db.query(
      `
    SELECT *
    FROM product
    WHERE id = $1
  `,
      [id]
    );

    return rows;
  }

  async findByName(name) {
    const [rows] = await db.query(
      `
      SELECT * FROM product
      WHERE name = $1
    `,
      [name]
    );

    return rows;
  }

  async create({ name, description, price }) {
    const [rows] = await db.query(
      `
      INSERT INTO product(name, description, price)
      VALUES($1, $2, $3)
      RETURNING *
    `,
      [name, description, price]
    );

    return rows;
  }

  async update(id, { name, description, price }) {
    const [rows] = await db.query(
      `
      UPDATE product
      SET
        name = $2, description = $3, price = $4,
      WHERE id = $1
      RETURNING *
    `,
      [id, name, description, price]
    );

    return rows;
  }

  async delete(id) {
    const [rows] = await db.query(
      `
      DELETE FROM product
      WHERE id = $1
      RETURNING *
    `,
      [id]
    );

    return rows;
  }
}

module.exports = new ProductRepository();
