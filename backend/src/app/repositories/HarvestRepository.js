import db from '../../database';

class HarvestsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(`
      SELECT harvests.*,
      stores.name AS store_name, plans.name AS plan_name
      FROM harvests
      LEFT JOIN stores ON stores.id = harvests.store_id
      LEFT JOIN plans ON plans.id = harvests.plan_id
      ORDER BY harvests.name ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [rows] = await db.query(
      `
    SELECT harvests.*,
    stores.name AS store_name, plans.name AS plan_name
    FROM harvests
    LEFT JOIN stores ON stores.id = harvests.store_id
    LEFT JOIN plans ON plans.id = harvests.plan_id
    WHERE harvests.id = $1
  `,
      [id],
    );

    return rows;
  }

  async findByName(name) {
    const [rows] = await db.query(
      `
      SELECT * FROM harvests
      WHERE name = $1
    `,
      [name],
    );

    return rows;
  }

  async create({ harvested_in }) {
    const [rows] = await db.query(
      `
      INSERT INTO harvests(harvested_in)
      VALUES($1, $2, $3)
      RETURNING *
    `,
      [harvested_in],
    );

    return rows;
  }

  async update({ harvested_in }) {
    const [rows] = await db.query(
      `
      UPDATE harvests
      SET
      harvested_in = $1
      RETURNING *
    `,
      [harvested_in],
    );

    return rows;
  }

  async delete(id) {
    const [rows] = await db.query(
      `
      DELETE FROM harvests
      WHERE harvested_in = $1
      RETURNING *
    `,
      [id],
    );

    return rows;
  }
}

export default new HarvestsRepository();
