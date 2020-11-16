module.exports = {
  HOST: "localhost",
  USER: "admin",
  PASSWORD: "admin123",
  DB: "testdb3",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
