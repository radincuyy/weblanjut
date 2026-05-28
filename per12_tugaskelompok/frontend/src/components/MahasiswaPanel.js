import React, { useEffect, useState } from 'react';
import api from '../services/api';

const empty = { nim: '', nama: '', jurusan: '', angkatan: '' };

function MahasiswaPanel() {
    const [items, setItems] = useState([]);
    const [form, setForm] = useState(empty);
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState('');

    const load = async () => {
        try {
            const { data } = await api.get('/mahasiswa');
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
                await api.put(`/mahasiswa/${editingId}`, form);
            } else {
                await api.post('/mahasiswa', form);
            }
            setForm(empty);
            setEditingId(null);
            await load();
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    const onEdit = (m) => {
        setEditingId(m.id);
        setForm({ nim: m.nim, nama: m.nama, jurusan: m.jurusan, angkatan: m.angkatan });
    };

    const onDelete = async (id) => {
        if (!window.confirm('Hapus mahasiswa ini?')) return;
        try {
            await api.delete(`/mahasiswa/${id}`);
            await load();
        } catch (err) {
            setError(err.response?.data?.message || err.message);
        }
    };

    const onCancel = () => { setForm(empty); setEditingId(null); };

    return (
        <div className="card">
            <h2>Daftar Mahasiswa <span className="badge badge-mysql">MySQL</span></h2>

            <form onSubmit={onSubmit}>
                <input name="nim" placeholder="NIM" value={form.nim} onChange={onChange} required />
                <input name="nama" placeholder="Nama" value={form.nama} onChange={onChange} required />
                <input name="jurusan" placeholder="Jurusan" value={form.jurusan} onChange={onChange} required />
                <input name="angkatan" placeholder="Angkatan" type="number" value={form.angkatan} onChange={onChange} required />
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
                <p className="empty">Belum ada data mahasiswa.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Angkatan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(m => (
                            <tr key={m.id}>
                                <td>{m.nim}</td>
                                <td>{m.nama}</td>
                                <td>{m.jurusan}</td>
                                <td>{m.angkatan}</td>
                                <td>
                                    <button className="btn-edit" onClick={() => onEdit(m)}>Edit</button>
                                    {' '}
                                    <button className="btn-danger" onClick={() => onDelete(m.id)}>Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default MahasiswaPanel;
