import React, { useEffect, useState } from 'react';
import api from '../services/api';

const empty = { judul: '', sutradara: '', genre: '', tahun: '' };

function FilmPanel() {
    const [items, setItems] = useState([]);
    const [form, setForm] = useState(empty);
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState('');

    const load = async () => {
        try {
            const { data } = await api.get('/film');
            setItems(data);
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    useEffect(() => { load(); }, []);

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (editingId) {
                await api.put(`/film/${editingId}`, form);
            } else {
                await api.post('/film', form);
            }
            setForm(empty);
            setEditingId(null);
            await load();
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    const onEdit = (f) => {
        setEditingId(f._id);
        setForm({ judul: f.judul, sutradara: f.sutradara, genre: f.genre, tahun: f.tahun });
    };

    const onDelete = async (id) => {
        if (!window.confirm('Hapus film ini?')) return;
        try {
            await api.delete(`/film/${id}`);
            await load();
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    const onCancel = () => { setForm(empty); setEditingId(null); };

    return (
        <div className="card">
            <h2>Daftar Film <span className="badge badge-mongo">MongoDB</span></h2>

            <form onSubmit={onSubmit}>
                <input name="judul" placeholder="Judul" value={form.judul} onChange={onChange} required />
                <input name="sutradara" placeholder="Sutradara" value={form.sutradara} onChange={onChange} required />
                <input name="genre" placeholder="Genre" value={form.genre} onChange={onChange} required />
                <input name="tahun" placeholder="Tahun" type="number" value={form.tahun} onChange={onChange} required />
                <div className="actions">
                    <button type="submit" className="btn-primary">
                        {editingId ? 'Update' : 'Tambah'}
                    </button>
                    {editingId && (
                        <button type="button" className="btn-secondary" onClick={onCancel}>Batal</button>
                    )}
                </div>
            </form>

            {error && <div className="error">{error}</div>}

            {items.length === 0 ? (
                <p className="empty">Belum ada data film.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Judul</th>
                            <th>Sutradara</th>
                            <th>Genre</th>
                            <th>Tahun</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(f => (
                            <tr key={f._id}>
                                <td>{f.judul}</td>
                                <td>{f.sutradara}</td>
                                <td>{f.genre}</td>
                                <td>{f.tahun}</td>
                                <td>
                                    <button className="btn-edit" onClick={() => onEdit(f)}>Edit</button>
                                    {' '}
                                    <button className="btn-danger" onClick={() => onDelete(f._id)}>Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default FilmPanel;
