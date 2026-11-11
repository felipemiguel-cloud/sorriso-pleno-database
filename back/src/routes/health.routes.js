const express = require('express');
const pool = require('../db');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    console.error('Falha ao verificar o banco:', error.message);
    res.status(500).json({ status: 'error', database: 'disconnected' });
  }
});

module.exports = router;
