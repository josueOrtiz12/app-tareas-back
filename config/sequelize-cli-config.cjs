const path = require('path');
const fs = require('fs');

const envPaths = [
  path.join(__dirname, '../deploy/.env'),
  path.join(process.cwd(), 'deploy/.env'),
  path.join(process.cwd(), '.env')
];

let envLoaded = false;
for (const envPath of envPaths) {
  if (fs.existsSync(envPath)) {
    require('dotenv').config({ path: envPath });
    console.log(`✅ Loaded .env from: ${envPath}`);
    envLoaded = true;
    break;
  }
}

if (!envLoaded) {
  console.warn('⚠️  No .env file found');
}

module.exports = {
  dev: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || 'app-tareas-db',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: console.log 
  }
};