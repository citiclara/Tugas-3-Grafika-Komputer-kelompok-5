# Eksperimen p5.js

Repositori ini berisi projek eksperimen menggunakan p5.js, sebuah library JavaScript untuk membuat grafik dan animasi interaktif.

## Struktur Projek

Projek ini terdiri dari beberapa file utama:
- `index.html` - File HTML utama yang memuat p5.js dan file JavaScript lainnya
- `sketch.js` - File JavaScript utama untuk kode p5.js
- `sketch-1.js` - File JavaScript alternatif untuk eksperimen pertama
- `sketch-2.js` - File JavaScript alternatif untuk eksperimen kedua

## Cara Menjalankan

1. Clone repositori ini ke komputer Anda
   ```
   git clone https://github.com/username/nama-repositori.git
   ```
   
2. Buka file `index.html` di browser web Anda

## Cara Mengganti File JavaScript

Untuk mengganti file JavaScript yang digunakan (sketch.js, sketch-1.js, atau sketch-2.js), Anda perlu:

1. Buka file `index.html` menggunakan editor teks atau IDE (seperti Visual Studio Code)

2. Cari baris yang memuat file JavaScript:
   ```html
   <script src="sketch.js"></script>
   ```

3. Ganti nama file dengan file JavaScript yang ingin Anda gunakan:
   ```html
   <!-- Untuk menggunakan sketch-1.js -->
   <script src="sketch-1.js"></script>
   
   <!-- Atau untuk menggunakan sketch-2.js -->
   <script src="sketch-2.js"></script>
   ```

4. Simpan perubahan dan muat ulang halaman di browser web Anda

## Perbedaan Antar File Sketch

- `sketch.js`: [Menyediakan fungsi-fungsi 2D seperti lingkaran, persegi, segitiga, dan garis. ]
- `sketch-1.js`: [Memungkinkan transformasi seperti translasi, rotasi, dan skala.]
- `sketch-2.js`: [Memudahkan penambahan interaktivitas pada sketsa.]
