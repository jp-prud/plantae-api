const db = require("../../database");

class ProductiveLocaleRepository {
  async findAll(orderBy = "ASC") {
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";

    const rows = await db.query(`
      SELECT *
      FROM productive_locale
      ORDER BY productive_locale.name ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [rows] = await db.query(
      `
    SELECT *
    FROM productive_locale
    WHERE id = $1
  `,
      [id]
    );

    return rows;
  }

  async findByAddress(address_info) {
    const [rows] = await db.query(
      `
      SELECT * FROM productive_locale
      WHERE address_info = $1
    `,
      [address_info]
    );

    return rows;
  }

  async create({ name, address_info, quality_seal_id }) {
    const [rows] = await db.query(
      `
      INSERT INTO productive_locale(name, address_info,
quality_seal_id)
      VALUES($1, $2, $3)
      RETURNING *
    `,
      [name, address_info, quality_seal_id]
    );

    return rows;
  }

  async update(id, { name, address_info, quality_seal_id }) {
    const [rows] = await db.query(
      `
      UPDATE productive_locale
      SET
        name = $2, address_info = $3, quality_seal_id = $4,
      WHERE id = $1
      RETURNING *
    `,
      [id, name, address_info, quality_seal_id]
    );

    return rows;
  }

  async delete(id) {
    const [rows] = await db.query(
      `
      DELETE FROM productive_locale
      WHERE id = $1
      RETURNING *
    `,
      [id]
    );

    return rows;
  }
}

module.exports = new ProductiveLocaleRepository();
