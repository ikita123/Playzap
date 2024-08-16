import express from 'express';
import { sequelize } from '../src/config/database';
import mineRoutes from '../src/routes/mineRoutes';
import authRoutes from '../src/routes/auth';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/mine', mineRoutes);

// Sync database and start server
sequelize.sync({ alter: true }).then(() => {  
  console.log('Database & tables synchronized!');

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});

