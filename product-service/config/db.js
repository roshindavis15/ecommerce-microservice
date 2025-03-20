const pool=new pool({
    connectionString:process.env.DATABASE_URL
});

async function initDB() {
    const client = await pool.connect();
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS products (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          description TEXT,
          price DECIMAL(10, 2) NOT NULL,
          stock_quantity INTEGER NOT NULL DEFAULT 0,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      console.log('Product database initialized');
    } catch (err) {
      console.error('Error initializing database', err);
    } finally {
      client.release();
    }
  }
  
  initDB();