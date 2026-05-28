const { pool } = require('../config/mysql');

exports.getAll = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM mahasiswa ORDER BY id DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getOne = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM mahasiswa WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.create = async (req, res) => {
    const { nim, nama, jurusan, angkatan } = req.body;
    if (!nim || !nama || !jurusan || !angkatan) {
        return res.status(400).json({ message: 'nim, nama, jurusan, angkatan wajib diisi' });
    }
    try {
        const [result] = await pool.query(
            'INSERT INTO mahasiswa (nim, nama, jurusan, angkatan) VALUES (?, ?, ?, ?)',
            [nim, nama, jurusan, Number(angkatan)]
        );
        res.status(201).json({ id: result.insertId, nim, nama, jurusan, angkatan: Number(angkatan) });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.update = async (req, res) => {
    const { nim, nama, jurusan, angkatan } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE mahasiswa SET nim = ?, nama = ?, jurusan = ?, angkatan = ? WHERE id = ?',
            [nim, nama, jurusan, Number(angkatan), req.params.id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
        res.json({ id: Number(req.params.id), nim, nama, jurusan, angkatan: Number(angkatan) });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.remove = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM mahasiswa WHERE id = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
        res.json({ message: 'Mahasiswa berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
