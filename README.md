# WebGL 3D Renderer: H - A - 8





Nama: Haliza Nur Kamila Apalwan
NRP : 5025231038

## ✨ Fitur

* **Pemodelan 3D dari Primitif**: Karakter dibangun menggunakan primitif geometri (prisma/kubus) yang didefinisikan oleh *array vertex*.
* **Pewarnaan Gradasi Estetis**:
    * **H**: *Ocean Breeze* (Gradasi Cyan/Biru Laut).
    * **A**: *Sunset Gold* (Gradasi Kuning/Oranye Senja).
    * **8**: *Cyberpunk Neon* (Gradasi Lavender/Ungu Tua).
* **Implementasi Pencahayaan (Lighting)**:
    * **Ambient Light**: Memberikan pencahayaan dasar agar sisi gelap tidak hitam pekat.
    * **Diffuse Light (Directional)**: Mensimulasikan sumber cahaya matahari dari arah kanan-atas-depan, memberikan kedalaman dan volume pada bentuk objek.
* **Animasi Interaktif**:
    * Rotasi otomatis pada sumbu Y dan X.
    * Fitur *Pause/Resume* animasi menggunakan Klik Mouse atau Tombol Spasi.
* **UI Responsif**: Antarmuka modern dengan tema gelap (*dark mode*) menggunakan CSS Flexbox.

## How to Run

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/username/repo-name.git](https://github.com/username/repo-name.git)
    ```
2.  **Buka proyek:**
    Cukup buka file `index.html` untuk di run.

## Controller

| Input | Aksi |
| :--- | :--- |
| **Klik Mouse** | Jeda / Lanjutkan Rotasi |
| **Tombol Spasi** | Jeda / Lanjutkan Rotasi |

## Struktur File

* **`index.html`**: Berisi struktur HTML dan kode **GLSL Shaders** (Vertex & Fragment shaders).
* **`style.css`**: Berisi *styling* untuk tampilan UI dan tata letak kanvas.
* **`main.js`**:  Menangani inisialisasi konteks WebGL, *binding buffer*, kompilasi *shader*, dan *loop* rendering utama.
* **`data.js`**: Menyimpan data 3D (Vertices, Colors, Indices) untuk bentuk huruf dan angka.
* **`IOHandler.js`**: Mengelola input pengguna (Event Keyboard dan Mouse).
* **`Helper.js`**: Fungsi untuk transformasi matriks (Translasi, Rotasi, Skala).
* **`gl-matrix-min.js`**: Pustaka eksternal untuk perhitungan matematika matriks dan vektor berkinerja tinggi.
