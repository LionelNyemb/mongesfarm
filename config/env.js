const env = {
  SERVER_PORT: 3002,
  DATABASE_URL: "mysql://root:@localhost:3306/mongesfarm",
  secret_key: "lionel",
};

// const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mongesfarm",
// });

module.exports = env;
