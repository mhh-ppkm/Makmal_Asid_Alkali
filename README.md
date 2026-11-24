# Makmal Asid dan Alkali

Makmal maya 3D untuk Sains sekolah rendah (topik asid dan alkali). Murid menuang bahan ke dalam bikar, menguji dengan kertas litmus biru dan merah, kemudian mengelaskan bahan sebagai asid, neutral atau alkali. Penunjuk semesta (pH) disediakan sebagai aktiviti tambahan.

Ir. Ts. Dr. Muhammad Hafiz HASSAN, School of Mechanical Engineering, Universiti Sains Malaysia.

## Pasang di GitHub Pages

1. Cipta repositori awam baharu, contohnya `makmal-asid-alkali`.
2. Muat naik semua kandungan folder ini dengan struktur folder yang sama: `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, `icons/` dan `vendor/`.
   Folder `vendor/mediapipe-hands` mengandungi model tangan. Tanpanya, kawalan tangan tidak berfungsi.
3. Settings → Pages → *Deploy from a branch*, cawangan `main`, folder `/ (root)`.
4. Buka `https://mhh-ppkm.github.io/makmal-asid-alkali/`.

## Cara guna di kelas

* **Tablet:** murid tekan botol, kertas litmus dan butang jawapan terus pada skrin.
* **Kamera:** tekan **Kawalan tangan**. Murid berdiri di hadapan kamera dan mencubit (ibu jari + jari telunjuk) botol, seret ke bikar, lepaskan. Cubitan pada butang menekan butang itu.
* **Mod Guru:** taip nama murid, tekan **Cabaran baharu**. Botol sasaran berkelip dan arahan dibacakan. Jadual keputusan dan markah cubaan pertama diisi sendiri.
* **Tukar kamera:** untuk tablet, pilih kamera depan (murid menghadap skrin) atau belakang.

## Pasang sebagai aplikasi

Chrome atau Edge: tekan butang ⬇ di bar atas. iPad atau iPhone: Safari → Kongsi → *Tambah ke Skrin Utama*. Model tangan disimpan sekali, jadi kawalan tangan berfungsi tanpa internet selepas dipasang.

## Selepas mengubah index.html

Tukar `VERSION` di bahagian atas `sw.js` (contoh `makmal-asid-alkali-v2`) supaya aplikasi yang sudah dipasang menerima versi baharu.

## Data bahan

| Bahan | Sifat | pH anggaran |
|---|---|---|
| Cuka, jus limau, air bergas | Asid | 2 hingga 4 |
| Air suling, larutan garam, larutan gula | Neutral | 7 |
| Air sabun, larutan ubat gigi, larutan soda penaik, air kapur | Alkali | 9 hingga 12 |

Lesen: three.js (MIT) dan MediaPipe Hands (Apache 2.0) di dalam `vendor/`.
