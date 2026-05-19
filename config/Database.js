import Sequelize from "sequelize";
import dotenv from "dotenv";
import path from "path";


dotenv.config({ path: path.resolve(process.cwd(), 'deploy/.env') });

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432, 
    dialect: 'postgres', 
    logging: false, 
    pool: {
      max: 20, 
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);


sequelize.addHook('beforeValidate', (instance) => {
  for (const key in instance.dataValues) {
    const value = instance.dataValues[key];
    if (typeof value === 'string') {
      const lowKey = key.toLowerCase();
   
      if (lowKey.includes('password') || lowKey.includes('email') || lowKey.includes('hash')) {
        continue;
      }
      instance.dataValues[key] = value.toUpperCase();
    }
  }
});

export default sequelize;