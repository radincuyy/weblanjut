exports.getFilm = (req, res) => {
    res.json([
        {
            id: 1,
            judul: 'Moving',
            genre: 'Action, Drama',
            tahun: 2023
        },
        {
            id: 2,
            judul: 'Can This Love Be Translated?',
            genre: 'Drama, Romance',
            tahun: 2025
        },
        {
            id: 3,
            judul: 'Happiness',
            genre: 'Horror, Thriller',
            tahun: 2021
        }
    ]);
}