const { Pool } = require("pg");
const pg = require("pg");

pg.types.setTypeParser(1082, "text", val => val);

let pool = new Pool({
  connectionString: global.gConfig.databaseConnectionString
});

pool.on("error", (err, client) =>
  console.debug(
    "### the pool connections is exiting with error, check the log for more information ### \n",
    err,
    client
  )
);

const databaseConnect = async () => {
  console.debug("connecting to database");
  try {
    await pool.connect();
    console.debug("connection established");
  } catch (err) {
    console.debug(
      "### could not connect to the database, see the log below for more information (and double check if the database is running) ### \n",
      err
    );
  }
};

module.exports.databaseConnect = databaseConnect;
module.exports.pool = pool;
