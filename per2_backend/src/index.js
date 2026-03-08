require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const filmRoutes = require('./routes/filmRoutes');
const app = express();


app.use(cors({
    origin: 'http://localhost:3001', // Sesuaikan dengan frontend
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));
app.use('/api', userRoutes);
app.use('/api', filmRoutes);
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Server berjalan!');
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));