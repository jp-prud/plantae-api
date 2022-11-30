const db = require('../../database');

class UserRepository {
  async findByEmailAndPassword(email, password) {
    const [rows] = await db.query(
      `
    SELECT *
    FROM users
    WHERE email = $1 AND password = $2
  `,
      [email, password],
    );

    return rows;
  }

  async create(email, password) {
    const [rows] = await db.query(
      `
    INSERT INTO users(email, password)
    VALUES ($1, $2)
    RETURNING *
  `,
      [email, password],
    );

    return rows;
  }

}

module.exports = new UserRepository();
