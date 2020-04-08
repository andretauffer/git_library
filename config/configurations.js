const defaultConfig = {
  clientPort: 3000,
  serverPort: 8000,
  databaseConnectionString:
    "postgresql://user:password@localhost:5432/database",
  databaseUser: process.env.POSTGRES_USER,
  databasePassword: process.env.POSTGRES_PASSWORD,
  databaseName: process.env.POSTGRES_DB,
  databasePort: process.env.POSTGRES_PORT,
  rootPath: process.env.PWD,
  clientHost: "http://localhost:3000"
};

const testConfig = {
  ...defaultConfig,
  clientPort: 3001,
  serverPort: 8001
};

const productionConfig = {
  ...defaultConfig,
  clientPort: 3000,
  serverPort: process.env.PORT || 8000,
  databaseConnectionString: process.env.DATABASE_URL,
  clientHost: "https://project.herokuapp.com/"
};

module.exports = {
  development: defaultConfig,
  test: testConfig,
  production: productionConfig
};
