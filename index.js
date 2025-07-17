// index.js
import express from 'express';
import connectDB from './config/db.js';
import todoRoutes from './routes/todos.js'
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to DB
await connectDB(); 

app.use(express.json());

import authRoutes from './routes/auth.js';
// Add these
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
