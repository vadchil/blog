# Panduan Maintenance Blog

Dokumen ini menjelaskan file-file yang perlu diubah untuk memelihara dan mengkustomisasi blog Anda.

## 📋 Daftar File yang Perlu Diubah

### 1. **Metadata & SEO Global** 
📁 `app/layout.tsx`

File ini mengatur metadata SEO global untuk seluruh website:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'Minimalist Blog',        // ← GANTI: Judul blog Anda
    template: '%s | Minimalist Blog', // ← GANTI: Template untuk halaman lain
  },
  description: 'A modern, minimalist blog...', // ← GANTI: Deskripsi blog
  keywords: ['blog', 'minimalist', ...],      // ← GANTI: Keywords SEO
  authors: [{ name: 'Your Name' }],           // ← GANTI: Nama Anda
  openGraph: {
    siteName: 'Minimalist Blog',              // ← GANTI: Nama untuk social media
  },
}
```

**Yang perlu diubah:**
- `title.default`: Judul blog yang muncul di browser tab
- `title.template`: Format judul untuk halaman lain (contoh: "Artikel | Blog Saya")
- `description`: Deskripsi blog untuk SEO (150-160 karakter)
- `keywords`: Kata kunci relevan untuk SEO
- `authors.name`: Nama penulis/pemilik blog
- `openGraph.siteName`: Nama yang muncul saat share di social media

---

### 2. **Favicon & Icon**
📁 `app/icon.png` atau `public/favicon.ico`

Next.js App Router mendukung beberapa cara untuk menambahkan icon:

**Opsi 1: Menggunakan App Router Metadata (Recommended)**
- Buat file `app/icon.png` (ukuran: 512x512px atau lebih besar)
- Next.js akan otomatis generate berbagai ukuran
- File akan otomatis digunakan sebagai favicon

**Opsi 2: Menggunakan file di public/**
- Letakkan `favicon.ico` di folder `public/favicon.ico`
- Atau buat `public/icon.png`, `public/apple-icon.png`
- Tambahkan di `app/layout.tsx`:
  ```tsx
  export const metadata: Metadata = {
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-icon.png',
    },
  }
  ```

**Tools untuk membuat favicon:**
- [Favicon.io](https://favicon.io/) - Generate dari text atau image (GRATIS)
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Generate semua ukuran (GRATIS)
- [Canva](https://www.canva.com/) - Design custom icon
- [Figma](https://www.figma.com/) - Design professional icon

**Ukuran yang direkomendasikan:**
- `app/icon.png`: 512x512px atau 1024x1024px (Next.js auto-generate)
- `public/favicon.ico`: 32x32px atau 16x16px
- `public/apple-icon.png`: 180x180px (untuk iOS)

**Cara membuat:**
1. Design icon di Canva/Figma atau gunakan logo Anda
2. Export sebagai PNG (512x512px)
3. Simpan sebagai `app/icon.png`
4. Atau convert ke ICO di [Favicon.io](https://favicon.io/) dan simpan sebagai `public/favicon.ico`

---

### 3. **Judul & Tagline Homepage**
📁 `app/page.tsx`

File ini mengatur tampilan halaman utama:

```tsx
<h1>Minimalist Blog</h1>                    // ← GANTI: Judul blog
<p>Thoughts, ideas, and stories...</p>       // ← GANTI: Tagline/deskripsi singkat
```

**Yang perlu diubah:**
- Baris 12: Judul besar di homepage
- Baris 15: Tagline atau deskripsi singkat blog

---

### 4. **Nama Blog di Navbar**
📁 `components/Navbar.tsx`

File ini mengatur navigasi atas:

```tsx
<Link href="/">
  Minimalist Blog                          // ← GANTI: Nama blog di navbar
</Link>
```

**Yang perlu diubah:**
- Baris 12: Nama blog yang muncul di navbar (biasanya sama dengan judul)

---

### 5. **Copyright Footer**
📁 `components/Footer.tsx`

File ini mengatur footer website:

```tsx
<p>© {currentYear} Minimalist Blog. All rights reserved.</p>
// ← GANTI: "Minimalist Blog" dengan nama blog Anda
```

**Yang perlu diubah:**
- Baris 8: Nama blog di copyright (tahun otomatis)

**Opsional - Tambahkan link:**
- Social media links
- Email contact
- Privacy policy link

---

### 6. **Halaman About**
📁 `app/about/page.tsx`

File ini mengatur halaman tentang:

```typescript
export const metadata: Metadata = {
  title: 'About',                           // ← GANTI: Judul halaman
  description: 'Learn more about...',      // ← GANTI: Deskripsi untuk SEO
}
```

**Yang perlu diubah:**
- Metadata: title dan description untuk SEO
- Konten: Ganti semua teks dengan informasi tentang Anda

---

### 7. **Sitemap URL**
📁 `app/sitemap.ts`

File ini generate sitemap.xml untuk SEO:

```typescript
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
// ← GANTI: URL website Anda
```

**Yang perlu diubah:**
- `baseUrl`: Ganti dengan URL website Anda
- Atau set environment variable `NEXT_PUBLIC_BASE_URL`

---

### 8. **Robots.txt URL**
📁 `app/robots.ts`

File ini generate robots.txt:

```typescript
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
// ← GANTI: URL website Anda (sama dengan sitemap)
```

---

### 9. **Next.js Config (untuk Custom Domain)**
📁 `next.config.js`

Jika menggunakan custom domain atau subdirectory:

```javascript
const nextConfig = {
  output: 'export',
  // Jika deploy ke subdirectory, uncomment:
  // basePath: '/blog',           // ← GANTI: nama subdirectory
  // assetPrefix: '/blog',         // ← GANTI: sama dengan basePath
}
```

**Yang perlu diubah:**
- Hanya jika deploy ke subdirectory (bukan root domain)

---

### 10. **Package.json (Opsional)**
📁 `package.json`

File ini berisi informasi project:

```json
{
  "name": "minimalist-blog",        // ← OPSIONAL: Nama project
  "version": "1.0.0",               // ← OPSIONAL: Version
}
```

---

## 🎨 Kustomisasi Visual (Opsional)

### Warna
📁 `tailwind.config.js`

Ubah warna di bagian `colors`:

```javascript
colors: {
  soft: {
    blue: '#6B9BD1',      // ← GANTI: Warna accent utama
    green: '#7FB3A3',     // ← GANTI: Warna accent sekunder
  },
}
```

### Font
📁 `app/layout.tsx` dan `app/globals.css`

Ubah font di:
- `app/layout.tsx`: Import font dari Google Fonts
- `app/globals.css`: Atau gunakan font system

---

## 📝 Menambah Artikel Baru

### Langkah-langkah Menambah Artikel

1. **Buat file Markdown baru** di folder `posts/`
   - Nama file: gunakan format slug (huruf kecil, dipisah dengan tanda hubung)
   - Contoh: `tips-belajar-nextjs.md`, `panduan-seo-blog.md`
   - Ekstensi harus `.md`

2. **Tambahkan frontmatter** di bagian atas file:
   ```markdown
   ---
   title: "Judul Artikel yang SEO-Friendly"
   date: "2024-01-20"
   description: "Deskripsi singkat artikel untuk SEO (150-160 karakter)"
   ---
   ```
   
   **Penjelasan frontmatter:**
   - `title`: Judul artikel (akan muncul di halaman dan SEO)
   - `date`: Tanggal artikel (format: YYYY-MM-DD)
   - `description`: Deskripsi untuk meta description (penting untuk SEO)

3. **Tulis konten** dalam format Markdown:
   ```markdown
   ## Heading 2
   
   Paragraf konten...
   
   ### Heading 3
   
   - Bullet point
   - List item
   
   **Bold text** dan *italic text*
   
   [Link](https://example.com)
   ```

4. **Test di local:**
   ```bash
   npm run dev
   ```
   Buka http://localhost:3000 dan cek artikel muncul di homepage

5. **Build dan deploy:**
   ```bash
   npm run build
   ```
   Push ke GitHub atau deploy ke hosting

### Tips Menulis Artikel

- **Judul SEO-friendly**: Gunakan kata kunci yang relevan
- **Deskripsi menarik**: 150-160 karakter, ringkas tapi informatif
- **Struktur jelas**: Gunakan heading (H2, H3) untuk struktur
- **Konten berkualitas**: Fokus pada value untuk pembaca
- **Format konsisten**: Ikuti format artikel yang sudah ada

### Contoh File Artikel

```markdown
---
title: "Cara Setup Next.js dari Nol untuk Pemula"
date: "2024-01-25"
description: "Panduan lengkap setup Next.js untuk pemula, dari install hingga deploy pertama kali."
---

Next.js adalah framework React yang sangat populer. Mari kita pelajari cara setup dari awal.

## Persiapan

Sebelum mulai, pastikan Anda sudah install:

- Node.js 18 atau lebih baru
- npm atau yarn
- Code editor (VS Code recommended)

## Langkah 1: Install Next.js

...

## Kesimpulan

Dengan Next.js, Anda bisa membuat website modern dengan mudah.
```

---

## 🗑️ Menghapus Artikel

### Cara Menghapus Artikel

1. **Hapus file Markdown** di folder `posts/`
   - Contoh: Hapus `posts/artikel-lama.md`
   - File yang dihapus tidak akan muncul lagi di blog

2. **Rebuild website:**
   ```bash
   npm run build
   ```

3. **Deploy ulang:**
   - Push perubahan ke GitHub (jika pakai GitHub Actions, akan auto-deploy)
   - Atau upload folder `out/` yang baru ke hosting

### Catatan Penting

- ⚠️ **URL artikel akan menjadi 404**: Setelah dihapus, URL artikel akan menampilkan halaman 404
- 🔍 **Update sitemap**: Sitemap akan otomatis update setelah rebuild (tidak perlu edit manual)
- 🔗 **Link internal**: Jika ada artikel lain yang link ke artikel yang dihapus, update link tersebut
- 📊 **Google Search Console**: Setelah beberapa waktu, Google akan otomatis menghapus dari index

### Alternatif: Archive Artikel (Tidak Menghapus)

Jika tidak ingin menghapus tapi tidak ingin ditampilkan:

1. **Pindahkan file** ke folder lain (misalnya `posts/archive/`)
2. Atau **tambahkan prefix** pada nama file: `_draft-artikel.md` (file dengan underscore tidak akan dibaca)
3. Atau **modifikasi `lib/posts.ts`** untuk filter artikel tertentu

---

## 🔍 Google Search Console Setup

Google Search Console membantu Anda monitor performa website di Google Search. Berikut cara setup-nya.

### Langkah 1: Daftar di Google Search Console

1. Buka [Google Search Console](https://search.google.com/search-console)
2. Login dengan akun Google
3. Klik **"Add Property"**
4. Pilih **"URL prefix"** (recommended) atau **"Domain"**
5. Masukkan URL website Anda (contoh: `https://yourdomain.com`)

### Langkah 2: Verifikasi Website

Google akan meminta verifikasi. Ada beberapa metode:

#### Metode 1: HTML Tag (Recommended untuk Next.js)

1. **Copy verification code** dari Google Search Console
   - Format: `<meta name="google-site-verification" content="xxxxxxxxxxxxx" />`

2. **Tambahkan ke `app/layout.tsx`**:
   
   ```typescript
   export const metadata: Metadata = {
     // ... metadata yang sudah ada
     verification: {
       google: 'xxxxxxxxxxxxx', // ← Paste verification code di sini (tanpa tag meta)
     },
   }
   ```

   **Contoh lengkap:**
   ```typescript
   export const metadata: Metadata = {
     title: {
       default: 'Mas Satria',
       template: '%s | Mas Satria',
     },
     description: 'Sebuah blog modern dan minimalis...',
     keywords: ['blog', 'minimalis', 'desain', 'menulis'],
     authors: [{ name: 'Satria Fadhil Muhammad' }],
     verification: {
       google: 'abc123xyz789', // ← Google Search Console verification code
     },
     openGraph: {
       type: 'website',
       locale: 'id_ID',
       siteName: 'Mas Satria',
     },
   }
   ```

3. **Build dan deploy:**
   ```bash
   npm run build
   ```
   Deploy ke hosting

4. **Klik "Verify"** di Google Search Console

#### Metode 2: HTML File Upload

1. Download file HTML dari Google Search Console
2. Letakkan di folder `public/` (contoh: `public/google1234567890.html`)
3. Build dan deploy
4. Verifikasi di Google Search Console

#### Metode 3: DNS Record (untuk Domain)

1. Tambahkan TXT record di DNS provider
2. Verifikasi di Google Search Console

### Langkah 3: Submit Sitemap

Setelah verifikasi berhasil:

1. Buka **"Sitemaps"** di sidebar Google Search Console
2. Masukkan URL sitemap: `https://yourdomain.com/sitemap.xml`
3. Klik **"Submit"**

Sitemap akan otomatis ter-update setiap kali Anda build website.

### Langkah 4: Monitor Performa

Setelah setup, Anda bisa:

- **Lihat search queries**: Kata kunci apa yang membawa traffic
- **Monitor indexing**: Artikel mana yang sudah di-index Google
- **Cek errors**: Masalah SEO atau crawling
- **Lihat performance**: CTR, impressions, clicks

### Tips Google Search Console

- ✅ **Submit sitemap** setelah setiap deploy besar
- ✅ **Monitor coverage**: Cek halaman yang error atau tidak ter-index
- ✅ **Gunakan URL Inspection**: Test URL spesifik untuk indexing
- ✅ **Request indexing**: Untuk artikel baru, request indexing manual bisa lebih cepat

### Troubleshooting

**Verification gagal?**
- Pastikan code sudah di-deploy dan bisa diakses
- Tunggu beberapa menit setelah deploy
- Cek apakah meta tag muncul di source code (View Page Source)

**Sitemap tidak terdeteksi?**
- Pastikan URL benar: `https://yourdomain.com/sitemap.xml`
- Pastikan sitemap bisa diakses (buka di browser)
- Tunggu beberapa hari untuk Google memproses

---

## 🔍 Checklist Maintenance

Sebelum launch, pastikan sudah mengubah:

- [ ] **Metadata SEO** di `app/layout.tsx` (title, description, author, keywords)
- [ ] **Favicon/Icon** (buat `app/icon.png` 512x512px atau `public/favicon.ico`)
- [ ] **Judul & Tagline** homepage di `app/page.tsx`
- [ ] **Nama Blog** di `components/Navbar.tsx`
- [ ] **Copyright** di `components/Footer.tsx`
- [ ] **Konten About** di `app/about/page.tsx` (metadata + konten)
- [ ] **URL Website** di `app/sitemap.ts` (ganti `yourdomain.com`)
- [ ] **URL Website** di `app/robots.ts` (ganti `yourdomain.com`)
- [ ] (Opsional) **Warna** di `tailwind.config.js`
- [ ] (Opsional) **Font** di `app/layout.tsx`

---

## 🚀 Setelah Mengubah File

1. **Test di local:**
   ```bash
   npm run dev
   ```

2. **Build untuk production:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   - Push ke GitHub (jika pakai GitHub Actions)
   - Atau upload folder `out/` ke hosting

---

## 📚 Referensi

- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Next.js Favicon](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons)
- [SEO Best Practices](https://nextjs.org/learn/seo/introduction-to-seo)

