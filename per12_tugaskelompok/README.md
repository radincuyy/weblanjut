# Per12 - Tugas Kelompok

Implementasi materi: **API**, **Frontend-Backend**, dan **Multi Database**.

Aplikasi web sederhana berbentuk CRUD dua entitas yang masing-masing tersimpan di database berbeda:

| Entitas    | Database | Endpoint              |
|------------|----------|-----------------------|
| Mahasiswa  | MySQL    | `/api/mahasiswa`      |
| Film       | MongoDB  | `/api/film`           |

Backend (Express) mengekspos REST API tunggal yang berbicara ke dua database sekaligus, frontend (React) memanggil API tersebut untuk menampilkan dan memanipulasi data.

## Struktur

```
per12_tugaskelompok/
├── backend/        # Express + mysql2 + mongoose
│   ├── src/
│   │   ├── config/         # koneksi MySQL & MongoDB
│   │   ├── controllers/    # mahasiswa (MySQL), film (MongoDB)
│   │   ├── models/         # mongoose schema
│   │   ├── routes/
│   │   └── index.js
│   ├── sql/init.sql        # skema + seed MySQL
│   └── .env.example
└── frontend/       # React (CRA)
    └── src/
        ├── components/     # MahasiswaPanel, FilmPanel
        ├── services/api.js
        └── App.js
```

## Prasyarat

- Node.js 18+
- MySQL berjalan di `localhost:3306`
- MongoDB berjalan di `localhost:27017`

## 1. Setup Backend

```powershell
cd per12_tugaskelompok\backend
copy .env.example .env
# sesuaikan kredensial MySQL/Mongo di .env bila perlu
npm install
```

Inisialisasi MySQL (opsional, schema juga dibuat otomatis saat server start):

```powershell
mysql -u root -p < sql\init.sql
```

Jalankan server:

```powershell
npm start
```

Server berjalan di `http://localhost:3000`.

## 2. Setup Frontend

```powershell
cd per12_tugaskelompok\frontend
npm install
npm start
```

Frontend berjalan di `http://localhost:3001` (CORS sudah dibuka di backend untuk origin tersebut).

## Endpoint API

### Mahasiswa (MySQL)
- `GET    /api/mahasiswa`         daftar
- `GET    /api/mahasiswa/:id`     detail
- `POST   /api/mahasiswa`         body: `{ nim, nama, jurusan, angkatan }`
- `PUT    /api/mahasiswa/:id`
- `DELETE /api/mahasiswa/:id`

### Film (MongoDB)
- `GET    /api/film`              daftar
- `GET    /api/film/:id`          detail
- `POST   /api/film`              body: `{ judul, sutradara, genre, tahun }`
- `PUT    /api/film/:id`
- `DELETE /api/film/:id`

## Konsep yang Diterapkan

- **API REST**: pemisahan resource via prefix `/api/...`, method sesuai aksi (GET/POST/PUT/DELETE), respon JSON, status code yang sesuai (200/201/400/404/500).
- **Frontend-Backend**: React di port 3001 memanggil Express di port 3000 lewat `axios`. CORS dikonfigurasi eksplisit di backend.
- **Multi Database**: satu aplikasi backend mengelola dua sumber data berbeda secara paralel:
  - **MySQL** (relasional) untuk data mahasiswa via pool `mysql2/promise`.
  - **MongoDB** (NoSQL) untuk data film via `mongoose`.
  Setiap entitas punya controller dan koneksi tersendiri sehingga teknologi DB bisa dipilih sesuai karakter data.
