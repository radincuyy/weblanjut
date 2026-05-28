const Film = require('../models/filmModel');

exports.getAll = async (req, res) => {
    try {
        const data = await Film.find().sort({ createdAt: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getOne = async (req, res) => {
    try {
        const data = await Film.findById(req.params.id);
        if (!data) return res.status(404).json({ message: 'Film tidak ditemukan' });
        res.json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.create = async (req, res) => {
    const { judul, sutradara, genre, tahun } = req.body;
    if (!judul || !sutradara || !genre || !tahun) {
        return res.status(400).json({ message: 'judul, sutradara, genre, tahun wajib diisi' });
    }
    try {
        const data = await Film.create({ judul, sutradara, genre, tahun: Number(tahun) });
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const data = await Film.findByIdAndUpdate(
            req.params.id,
            { ...req.body, tahun: req.body.tahun ? Number(req.body.tahun) : undefined },
            { new: true, runValidators: true }
        );
        if (!data) return res.status(404).json({ message: 'Film tidak ditemukan' });
        res.json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.remove = async (req, res) => {
    try {
        const data = await Film.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ message: 'Film tidak ditemukan' });
        res.json({ message: 'Film berhasil dihapus' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
