require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { ensureSchema } = require('./config/mysql');
const { connectMongo } = require('./config/mongo');

const mahasiswaRoutes = require('./routes/mahasiswaRoutes');
const filmRoutes = require('./routes/filmRoutes');

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_ORIGIN || 'http://localhost:3001',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Per12 Tugas Kelompok API',
        endpoints: {
            mahasiswa: '/api/mahasiswa  (MySQL)',
            film: '/api/film  (MongoDB)'
        }
    });
});

app.use('/api/mahasiswa', mahasiswaRoutes);
app.use('/api/film', filmRoutes);

const PORT = Number(process.env.PORT) || 3000;

(async () => {
    try {
        await ensureSchema();
        console.log('[MySQL] terhubung & schema siap');
    } catch (err) {
        console.error('[MySQL] gagal:', err.message);
        process.exit(1);
    }

    try {
        await connectMongo();
        console.log('[MongoDB] terhubung');
    } catch (err) {
        console.warn('[MongoDB] gagal terhubung:', err.message);
        console.warn('[MongoDB] endpoint /api/film akan error sampai MongoDB tersedia.');
    }

    app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
})();
