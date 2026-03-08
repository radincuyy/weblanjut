const express = require('express');
const router = express.Router();
const { getFilm } = require('../controllers/filmController');
router.get('/film', getFilm);
module.exports = router;

