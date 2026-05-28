const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema(
    {
        judul: { type: String, required: true },
        sutradara: { type: String, required: true },
        genre: { type: String, required: true },
        tahun: { type: Number, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Film', filmSchema);
