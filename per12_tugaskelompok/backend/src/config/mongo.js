const mongoose = require('mongoose');

async function connectMongo() {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/per12_perpustakaan';
    await mongoose.connect(uri);
}

module.exports = { connectMongo };
