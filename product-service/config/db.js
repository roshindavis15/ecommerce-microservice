import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import Product from "../models/product.js"

const syncDB = async () => {
    try {
      await sequelize.sync(); 
      console.log("✅ Database & tables created!");
    } catch (error) {
      console.error("❌ Error syncing database:", error);
    }
  };


dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,  
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});  

async function testDBConnection() {
  try {
      await sequelize.authenticate(); // Sequelize's method to check DB connection
      console.log('✅ Database connected successfully.');
  } catch (error) {
      console.error('❌ Database connection failed:', error.message);
  }
}


testDBConnection();
syncDB();


export default sequelize;
