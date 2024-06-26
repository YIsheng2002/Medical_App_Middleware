const userSchema = `
  CREATE TABLE IF NOT EXISTS user (
      userId VARCHAR(255) UNIQUE NOT NULL,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255)
  )
`;

module.exports = userSchema;