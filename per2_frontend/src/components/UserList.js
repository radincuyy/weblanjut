import React, { useState, useEffect } from 'react';
import axios from 'axios';
const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/users') // Pastikan port sesuai dengan backend
            .then(response => {
                console.log('Data dari API:', response.data);
                setUsers([response.data]);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            <h2>Daftar Pengguna</h2>
            <ul>
                {users.length > 0 ? (
                    users.map(user => (
                        <li key={user.id}>{user.nama} - {user.email}</li>
                    ))
                ) : (
                    <p>Data tidak tersedia</p>
                )}
            </ul>
        </div>
    );
};

export default UserList