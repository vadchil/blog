---
title: "Cara Hosting Website Gratis Menggunakan GitHub Pages"
date: "2024-01-14"
description: "Panduan lengkap cara hosting website statis gratis menggunakan GitHub Pages. Pelajari langkah-langkah setup, konfigurasi, dan tips untuk deploy website Anda tanpa biaya."
---

Ingin membuat website tapi tidak punya budget untuk hosting? GitHub Pages menawarkan solusi hosting gratis untuk website statis. Mari kita pelajari cara menggunakannya dari awal hingga website Anda online.

## Apa Itu GitHub Pages?

GitHub Pages adalah layanan hosting gratis dari GitHub yang memungkinkan Anda mempublish website statis langsung dari repository GitHub. Layanan ini sangat populer untuk:

- Portfolio website
- Blog developer
- Documentation site
- Project showcase
- Landing page

### Keuntungan GitHub Pages

- **100% Gratis**: Tidak ada biaya bulanan atau tahunan
- **Custom Domain**: Bisa menggunakan domain sendiri
- **HTTPS**: SSL certificate gratis dan otomatis
- **CDN**: Website di-serve melalui CDN global
- **Version Control**: Terintegrasi dengan Git workflow
- **Custom 404**: Bisa customize halaman error

### Keterbatasan GitHub Pages

- **Hanya Website Statis**: HTML, CSS, JavaScript saja (tidak ada server-side)
- **Build Time Limit**: Build process maksimal 10 menit
- **Repository Size**: Maksimal 1GB per repository
- **Bandwidth**: 100GB per bulan (cukup untuk website kecil-menengah)

## Persiapan: Yang Diperlukan

Sebelum mulai, pastikan Anda sudah memiliki:

1. **Akun GitHub**: Daftar di [github.com](https://github.com) jika belum punya
2. **Git Terinstall**: Download dari [git-scm.com](https://git-scm.com)
3. **Website Statis**: File HTML, CSS, JavaScript (atau project Next.js/Gatsby yang bisa di-build)

## Langkah 1: Membuat Repository GitHub

### Cara Membuat Repository Baru

1. Login ke GitHub
2. Klik tombol **"+"** di kanan atas, pilih **"New repository"**
3. Isi nama repository (misalnya: `my-blog`)
4. Pilih **Public** (GitHub Pages gratis hanya untuk public repo)
5. Jangan centang "Initialize with README" (kita akan push code sendiri)
6. Klik **"Create repository"**

### Naming Convention untuk GitHub Pages

- **User/Organization Pages**: Repository harus bernama `username.github.io`
  - Contoh: `johndoe.github.io`
  - Website akan tersedia di `https://johndoe.github.io`
  
- **Project Pages**: Bisa menggunakan nama apa saja
  - Contoh: `my-blog`
  - Website akan tersedia di `https://username.github.io/my-blog`

## Langkah 2: Setup Project Lokal

### Untuk Website HTML Sederhana

Jika Anda punya website HTML sederhana:

```bash
# Buat folder project
mkdir my-website
cd my-website

# Inisialisasi Git
git init

# Tambahkan file website Anda
# (index.html, style.css, script.js, dll)

# Commit file
git add .
git commit -m "Initial commit"
```

### Untuk Next.js Project

Jika menggunakan Next.js, pastikan `next.config.js` sudah dikonfigurasi:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Jika repository bukan di root, uncomment:
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name',
}

module.exports = nextConfig
```

## Langkah 3: Push ke GitHub

Setelah repository dibuat, GitHub akan menampilkan instruksi. Ikuti langkah berikut:

```bash
# Tambahkan remote repository
git remote add origin https://github.com/username/repository-name.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

Ganti `username` dan `repository-name` dengan informasi Anda.

## Langkah 4: Aktifkan GitHub Pages

### Melalui GitHub Settings

1. Buka repository Anda di GitHub
2. Klik tab **"Settings"**
3. Scroll ke bagian **"Pages"** di sidebar kiri
4. Di bagian **"Source"**, pilih branch yang akan digunakan:
   - **Deploy from a branch**: Untuk website statis biasa
   - **GitHub Actions**: Untuk build process otomatis
5. Pilih branch (biasanya `main` atau `master`)
6. Pilih folder (biasanya `/root` atau `/docs`)
7. Klik **"Save"**

### Untuk Next.js dengan GitHub Actions

Buat file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
      
      - name: Deploy
        uses: actions/deploy-pages@v4
```

## Langkah 5: Akses Website Anda

Setelah beberapa menit, website Anda akan tersedia di:

- **User/Organization Pages**: `https://username.github.io`
- **Project Pages**: `https://username.github.io/repository-name`

GitHub biasanya butuh 1-2 menit untuk pertama kali deploy.

## Setup Custom Domain (Opsional)

Jika Anda punya domain sendiri, bisa mengatur custom domain:

### 1. Tambahkan File CNAME

Buat file `CNAME` di folder `public/` (untuk Next.js) atau root folder:

```
yourdomain.com
www.yourdomain.com
```

### 2. Konfigurasi DNS

Di provider domain Anda, tambahkan record:

**Untuk Apex Domain (yourdomain.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**Untuk Subdomain (www.yourdomain.com):**
```
Type: CNAME
Name: www
Value: username.github.io
```

### 3. Aktifkan di GitHub

Di Settings > Pages, masukkan domain Anda di bagian "Custom domain" dan centang "Enforce HTTPS".

## Tips dan Best Practices

### 1. Gunakan GitHub Actions untuk Build

Untuk project yang perlu build (Next.js, Gatsby, dll), gunakan GitHub Actions agar build process otomatis setiap push.

### 2. Optimalkan Performa

- Minimize CSS dan JavaScript
- Optimize images
- Gunakan lazy loading
- Enable compression

### 3. Setup 404 Page

Buat file `404.html` di root untuk custom error page.

### 4. Monitor Deploy Status

Cek tab **"Actions"** di repository untuk melihat status deploy. Jika ada error, log akan ditampilkan di sana.

### 5. Backup Regular

Meskipun code ada di GitHub, tetap backup database atau data penting secara terpisah.

## Troubleshooting

### Website Tidak Muncul

- Pastikan repository adalah **Public**
- Cek Settings > Pages sudah diaktifkan
- Tunggu beberapa menit (deploy butuh waktu)
- Cek tab Actions untuk error messages

### Build Error

- Cek log di tab Actions
- Pastikan semua dependencies terinstall
- Verifikasi build command berjalan di local
- Pastikan Node.js version sesuai

### Custom Domain Tidak Bekerja

- Pastikan DNS sudah propagate (bisa cek dengan `dig` atau online tools)
- Tunggu hingga 48 jam untuk DNS propagation
- Pastikan file CNAME sudah di-commit
- Verifikasi HTTPS sudah enabled di GitHub

## Alternatif GitHub Pages

Jika GitHub Pages tidak cocok, pertimbangkan alternatif gratis lainnya:

- **Netlify**: Build process lebih fleksibel, form handling
- **Vercel**: Optimized untuk Next.js, edge functions
- **Cloudflare Pages**: CDN global, unlimited bandwidth
- **Render**: Support untuk static dan dynamic sites

## Kesimpulan

GitHub Pages adalah solusi hosting gratis yang sangat baik untuk website statis. Dengan setup yang benar, Anda bisa memiliki website profesional tanpa biaya hosting.

Keuntungan utama:
- **Gratis selamanya**
- **Mudah digunakan**
- **Terintegrasi dengan Git workflow**
- **Support custom domain**
- **HTTPS otomatis**

Untuk blog developer, portfolio, atau documentation site, GitHub Pages adalah pilihan yang sangat tepat. Mulai dari setup repository hingga website online, prosesnya relatif mudah dan tidak memerlukan pengetahuan teknis yang mendalam.

Jika Anda baru mulai membuat website, coba GitHub Pages terlebih dahulu. Setelah website Anda berkembang dan membutuhkan fitur lebih advanced, baru pertimbangkan alternatif berbayar.

