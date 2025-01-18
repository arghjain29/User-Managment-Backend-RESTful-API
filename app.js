require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const seedAdmin = require('./utils/seedAdmin');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Database Connection & Super Admin Seed
connectDB();
seedAdmin();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
