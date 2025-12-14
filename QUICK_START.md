# Quick Start: Kustomisasi Blog

Panduan cepat untuk mengubah elemen penting blog Anda.

## 🎯 5 File Paling Penting yang Harus Diubah

### 1. Metadata & SEO
**File:** `app/layout.tsx`

```typescript
// Baris 11-12: Judul blog
title: {
  default: 'Nama Blog Anda',           // ← GANTI INI
  template: '%s | Nama Blog Anda',     // ← GANTI INI
},

// Baris 14: Deskripsi untuk SEO
description: 'Deskripsi blog Anda...', // ← GANTI INI

// Baris 16: Nama Anda
authors: [{ name: 'Nama Anda' }],     // ← GANTI INI

// Baris 20: Nama untuk social media
siteName: 'Nama Blog Anda',            // ← GANTI INI
```

### 2. Favicon (Icon Browser Tab)
**File:** Buat `app/icon.png` (512x512px)

**Cara membuat:**
1. Buka [Favicon.io](https://favicon.io/)
2. Upload logo atau buat dari text
3. Download sebagai PNG (512x512px)
4. Simpan sebagai `app/icon.png`

Atau letakkan `favicon.ico` di folder `public/`

### 3. Judul Homepage
**File:** `app/page.tsx`

```tsx
// Baris 12: Judul besar
<h1>Nama Blog Anda</h1>              // ← GANTI INI

// Baris 15: Tagline
<p>Tagline atau deskripsi singkat</p> // ← GANTI INI
```

### 4. Nama di Navbar
**File:** `components/Navbar.tsx`

```tsx
// Baris 12
Minimalist Blog                        // ← GANTI INI
```

### 5. URL Website
**File:** `app/sitemap.ts` dan `app/robots.ts`

```typescript
// Ganti di kedua file (baris 5)
const baseUrl = 'https://yourdomain.com' // ← GANTI INI
```

---

## 📝 File Lainnya (Opsional)

### Footer Copyright
**File:** `components/Footer.tsx` (baris 8)
- Ganti "Minimalist Blog" dengan nama blog Anda

### Halaman About
**File:** `app/about/page.tsx`
- Ganti semua konten dengan informasi tentang Anda
- Update metadata (title, description)

---

## ✅ Setelah Mengubah

1. **Test:**
   ```bash
   npm run dev
   ```
   Buka http://localhost:3000

2. **Build:**
   ```bash
   npm run build
   ```

3. **Deploy** ke GitHub Pages atau hosting lainnya

---

## 📚 Detail Lengkap

Lihat file `MAINTENANCE.md` untuk panduan lengkap dan penjelasan detail setiap file.

