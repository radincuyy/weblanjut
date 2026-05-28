CREATE DATABASE IF NOT EXISTS per12_tugaskelompok;
USE per12_tugaskelompok;

CREATE TABLE IF NOT EXISTS mahasiswa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nim VARCHAR(20) NOT NULL UNIQUE,
    nama VARCHAR(100) NOT NULL,
    jurusan VARCHAR(100) NOT NULL,
    angkatan INT NOT NULL
);

INSERT INTO mahasiswa (nim, nama, jurusan, angkatan) VALUES
('2410501073', 'Radinka Alifasya Dinova',  'D3 Sistem Informasi', 2024),
('2410501103', 'Muhammad Ragil Hardika',    'D3 Sistem Informasi', 2024);