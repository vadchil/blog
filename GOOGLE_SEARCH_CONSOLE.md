# Setup Google Search Console

Panduan lengkap untuk setup Google Search Console pada blog Next.js Anda.

## 🎯 Apa Itu Google Search Console?

Google Search Console adalah tool gratis dari Google untuk:
- Monitor performa website di Google Search
- Submit sitemap untuk indexing
- Cek error dan masalah SEO
- Lihat search queries yang membawa traffic
- Request indexing untuk artikel baru

## 📋 Langkah-langkah Setup

### Langkah 1: Daftar di Google Search Console

1. Buka [Google Search Console](https://search.google.com/search-console)
2. Login dengan akun Google Anda
3. Klik **"Add Property"** (tambah properti)
4. Pilih **"URL prefix"** (recommended untuk kebanyakan kasus)
5. Masukkan URL website Anda:
   - Contoh: `https://yourdomain.com`
   - Atau: `https://username.github.io/blog` (jika pakai GitHub Pages)

### Langkah 2: Verifikasi Website

Google memerlukan verifikasi untuk memastikan Anda adalah pemilik website. Ada 3 metode:

---

## ✅ Metode 1: HTML Tag (Recommended)

**Ini adalah metode terbaik untuk Next.js App Router.**

### Step 1: Dapatkan Verification Code

1. Di Google Search Console, pilih metode **"HTML tag"**
2. Copy verification code yang diberikan
   - Format: `<meta name="google-site-verification" content="abc123xyz789" />`
   - Yang Anda butuhkan hanya bagian `content`: `abc123xyz789`

### Step 2: Tambahkan ke `app/layout.tsx`

Edit file `app/layout.tsx` dan tambahkan `verification` di metadata:

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Mas Satria',
    template: '%s | Mas Satria',
  },
  description: 'Sebuah blog modern dan minimalis dengan desain yang bersih serta konten yang dibuat dengan penuh pemikiran.',
  keywords: ['blog', 'minimalis', 'desain', 'menulis'],
  authors: [{ name: 'Satria Fadhil Muhammad' }],
  // ← TAMBAHKAN INI:
  verification: {
    google: 'abc123xyz789', // ← Paste verification code di sini (tanpa tag meta, hanya code-nya)
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Mas Satria',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
```

**Penting:**
- Hanya paste **code-nya saja**, bukan tag `<meta>` lengkap
- Contoh: Jika Google beri `content="abc123xyz789"`, paste hanya `abc123xyz789`

### Step 3: Build & Deploy

```bash
npm run build
```

Deploy ke hosting (GitHub Pages, Netlify, dll).

### Step 4: Verifikasi di Google Search Console

1. Kembali ke Google Search Console
2. Klik tombol **"Verify"**
3. Jika sukses, Anda akan melihat dashboard Google Search Console

---

## ✅ Metode 2: HTML File Upload

Alternatif jika metode HTML tag tidak bekerja.

### Step 1: Download File HTML

1. Di Google Search Console, pilih metode **"HTML file"**
2. Download file yang diberikan (contoh: `google1234567890.html`)

### Step 2: Letakkan di Folder `public/`

1. Copy file HTML ke folder `public/`
   - Contoh: `public/google1234567890.html`

2. File akan otomatis accessible di:
   - `https://yourdomain.com/google1234567890.html`

### Step 3: Build & Deploy

```bash
npm run build
```

Deploy ke hosting.

### Step 4: Verifikasi

1. Pastikan file bisa diakses di browser
2. Klik **"Verify"** di Google Search Console

---

## ✅ Metode 3: DNS Record

Untuk domain yang Anda miliki sendiri.

### Step 1: Dapatkan TXT Record

1. Di Google Search Console, pilih metode **"Domain name provider"**
2. Copy TXT record yang diberikan

### Step 2: Tambahkan di DNS Provider

1. Login ke DNS provider (GoDaddy, Namecheap, Cloudflare, dll)
2. Tambahkan TXT record:
   - **Name/Host**: `@` atau domain Anda
   - **Value**: TXT record dari Google
   - **TTL**: 3600 (default)

### Step 3: Verifikasi

1. Tunggu beberapa menit untuk DNS propagation
2. Klik **"Verify"** di Google Search Console

---

## 📊 Submit Sitemap

Setelah verifikasi berhasil, submit sitemap:

### Step 1: Buka Sitemaps

1. Di Google Search Console, klik **"Sitemaps"** di sidebar kiri

### Step 2: Submit Sitemap URL

1. Masukkan URL sitemap: `https://yourdomain.com/sitemap.xml`
2. Klik **"Submit"**

**Catatan:**
- Sitemap akan otomatis ter-update setiap kali Anda build website
- Google akan otomatis crawl sitemap secara berkala
- Tidak perlu submit ulang setiap kali ada artikel baru

---

## 🔍 Fitur Google Search Console

Setelah setup, Anda bisa:

### 1. Performance (Performa)

Lihat data search performance:
- **Queries**: Kata kunci apa yang membawa traffic
- **Pages**: Halaman mana yang paling banyak dikunjungi
- **Countries**: Dari negara mana traffic berasal
- **Devices**: Desktop vs Mobile

### 2. Coverage (Cakupan)

Monitor indexing:
- **Valid**: Halaman yang sudah ter-index
- **Error**: Halaman yang error
- **Excluded**: Halaman yang dikecualikan
- **Valid with warnings**: Halaman dengan warning

### 3. URL Inspection

Test URL spesifik:
- Cek apakah URL sudah ter-index
- Request indexing untuk URL baru
- Lihat bagaimana Google melihat halaman Anda

### 4. Core Web Vitals

Monitor performa website:
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

---

## 💡 Tips & Best Practices

### 1. Submit Sitemap Setelah Deploy Besar

Setelah menambah banyak artikel atau update besar, submit ulang sitemap:
- Buka Sitemaps
- Klik "Resubmit" atau masukkan URL lagi

### 2. Request Indexing untuk Artikel Baru

Untuk artikel baru, request indexing manual bisa lebih cepat:
1. Buka URL Inspection
2. Masukkan URL artikel
3. Klik "Request Indexing"

### 3. Monitor Coverage Errors

Cek secara berkala:
- Halaman yang error (404, dll)
- Halaman yang tidak ter-index
- Fix error yang ditemukan

### 4. Gunakan URL Inspection

Sebelum publish artikel penting:
- Test URL di URL Inspection
- Pastikan Google bisa crawl dengan benar
- Request indexing jika perlu

### 5. Monitor Search Queries

Lihat kata kunci yang membawa traffic:
- Optimasi artikel untuk kata kunci yang relevan
- Buat konten baru berdasarkan search queries populer

---

## 🆘 Troubleshooting

### Verification Gagal?

**Cek:**
1. ✅ Pastikan code sudah di-deploy
2. ✅ Tunggu beberapa menit setelah deploy
3. ✅ Cek apakah meta tag muncul di source code:
   - Buka website di browser
   - Klik kanan > View Page Source
   - Cari `google-site-verification`
4. ✅ Pastikan tidak ada typo di verification code

**Solusi:**
- Coba metode lain (HTML file atau DNS)
- Pastikan website bisa diakses publik
- Clear cache browser dan coba lagi

### Sitemap Tidak Terdeteksi?

**Cek:**
1. ✅ Pastikan URL benar: `https://yourdomain.com/sitemap.xml`
2. ✅ Buka URL di browser, pastikan bisa diakses
3. ✅ Pastikan sitemap format valid XML
4. ✅ Tunggu beberapa hari (Google butuh waktu untuk memproses)

**Solusi:**
- Test sitemap di [XML Sitemap Validator](https://www.xml-sitemap.com/)
- Pastikan sitemap ter-update setelah build
- Submit ulang sitemap

### Artikel Tidak Ter-index?

**Cek:**
1. ✅ Pastikan artikel ada di sitemap.xml
2. ✅ Pastikan tidak ada `noindex` tag
3. ✅ Cek di URL Inspection apakah ada error

**Solusi:**
- Request indexing manual di URL Inspection
- Pastikan artikel memiliki konten yang cukup
- Tunggu beberapa hari (Google butuh waktu)

---

## 📚 Referensi

- [Google Search Console Help](https://support.google.com/webmasters)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

---

## ✅ Checklist Setup

Setelah selesai, pastikan:

- [ ] Website sudah ter-verifikasi di Google Search Console
- [ ] Sitemap sudah di-submit
- [ ] Sitemap bisa diakses di browser
- [ ] Tidak ada error di Coverage
- [ ] (Opsional) Request indexing untuk homepage

Selesai! Website Anda sekarang terhubung dengan Google Search Console. 🎉

