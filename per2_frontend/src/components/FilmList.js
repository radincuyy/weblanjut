import React, { useState, useEffect } from 'react';
import axios from 'axios';
const FilmList = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/film') // Pastikan port sesuai dengan backend
            .then(response => {
                console.log('Data dari API:', response.data);
                setFilms(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            <h2>Daftar Film</h2>
            <ul>
                {films.length > 0 ? (
                    films.map(film => (
                        <li key={film.id}>{film.judul} - {film.genre} - {film.tahun}</li>
                    ))
                ) : (
                    <p>Data tidak tersedia</p>
                )}
            </ul>
        </div>
    );
};

export default FilmList;