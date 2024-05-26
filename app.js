const express = require('express');
const connectDB = require('./config/database');
const tradeRoutes = require('./routes/tradeRoutes');

require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());
app.use('/api/trades', tradeRoutes);

module.exports = app;
