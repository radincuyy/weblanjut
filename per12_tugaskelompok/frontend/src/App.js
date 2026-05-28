import React, { useState } from 'react';
import MahasiswaPanel from './components/MahasiswaPanel';
import FilmPanel from './components/FilmPanel';

function App() {
    const [tab, setTab] = useState('mahasiswa');

    return (
        <div className="container">
            <h1>Pertemuan 12 - Tugas Kelompok</h1>
            <p className="subtitle">
                Demo API + Frontend-Backend + Multi Database (MySQL &amp; MongoDB)
            </p>

            <div className="tabs">
                <button
                    className={`tab ${tab === 'mahasiswa' ? 'active' : ''}`}
                    onClick={() => setTab('mahasiswa')}
                >
                    Mahasiswa <span className="badge badge-mysql">MySQL</span>
                </button>
                <button
                    className={`tab ${tab === 'film' ? 'active' : ''}`}
                    onClick={() => setTab('film')}
                >
                    Film <span className="badge badge-mongo">MongoDB</span>
                </button>
            </div>

            {tab === 'mahasiswa' ? <MahasiswaPanel /> : <FilmPanel />}
        </div>
    );
}

export default App;
