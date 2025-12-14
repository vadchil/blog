# Panduan Menambah & Menghapus Artikel

Panduan lengkap untuk mengelola artikel blog Anda.

## ➕ Menambah Artikel Baru

### Langkah 1: Buat File Markdown

Buat file baru di folder `posts/` dengan format:

**Naming convention:**
- Gunakan huruf kecil
- Pisahkan kata dengan tanda hubung (-)
- Hindari spasi dan karakter khusus
- Ekstensi harus `.md`

**Contoh nama file yang baik:**
- ✅ `tips-belajar-nextjs.md`
- ✅ `panduan-seo-blog.md`
- ✅ `cara-setup-github-pages.md`
- ❌ `Tips Belajar Next.js.md` (ada spasi dan huruf besar)
- ❌ `panduan-seo-blog.txt` (bukan .md)

### Langkah 2: Tambahkan Frontmatter

Setiap artikel harus memiliki frontmatter di bagian atas:

```markdown
---
title: "Judul Artikel yang SEO-Friendly"
date: "2024-01-25"
description: "Deskripsi singkat artikel untuk SEO (150-160 karakter)"
---
```

**Penjelasan:**
- `title`: Judul artikel (akan muncul di halaman dan browser tab)
- `date`: Tanggal artikel dalam format `YYYY-MM-DD`
- `description`: Deskripsi untuk meta description (penting untuk SEO, 150-160 karakter)

### Langkah 3: Tulis Konten

Tulis konten menggunakan Markdown:

```markdown
---
title: "Cara Setup Next.js untuk Pemula"
date: "2024-01-25"
description: "Panduan lengkap setup Next.js dari install hingga deploy pertama kali."
---

## Pendahuluan

Next.js adalah framework React yang sangat populer...

## Langkah 1: Install Node.js

Sebelum mulai, pastikan Node.js sudah terinstall:

1. Download dari [nodejs.org](https://nodejs.org)
2. Install sesuai OS Anda
3. Verifikasi dengan command: `node --version`

## Langkah 2: Buat Project Next.js

Gunakan command berikut:

\`\`\`bash
npx create-next-app@latest my-blog
\`\`\`

## Kesimpulan

Dengan Next.js, Anda bisa membuat website modern dengan mudah.
```

### Langkah 4: Test di Local

```bash
npm run dev
```

Buka http://localhost:3000 dan pastikan:
- Artikel muncul di homepage
- Bisa diklik dan dibuka
- Konten ter-render dengan benar

### Langkah 5: Build & Deploy

```bash
npm run build
```

Setelah build sukses:
- Push ke GitHub (jika pakai GitHub Actions, akan auto-deploy)
- Atau upload folder `out/` ke hosting

---

## 🗑️ Menghapus Artikel

### Cara Menghapus

1. **Hapus file** dari folder `posts/`
   - Contoh: Hapus `posts/artikel-lama.md`

2. **Rebuild website:**
   ```bash
   npm run build
   ```

3. **Deploy ulang:**
   - Push ke GitHub atau upload folder `out/` yang baru

### Yang Terjadi Setelah Menghapus

- ✅ Artikel tidak muncul lagi di homepage
- ✅ URL artikel akan menampilkan halaman 404
- ✅ Sitemap.xml akan otomatis update (tidak perlu edit manual)
- ⏳ Google akan otomatis menghapus dari index setelah beberapa waktu

### Tips

- **Update link internal**: Jika ada artikel lain yang link ke artikel yang dihapus, update link tersebut
- **Google Search Console**: Bisa request removal manual di Google Search Console untuk menghapus lebih cepat
- **Archive alternatif**: Jika tidak ingin menghapus, bisa pindahkan ke folder `posts/archive/` atau rename dengan prefix `_` (contoh: `_draft-artikel.md`)

---

## 📝 Template Artikel

Gunakan template ini untuk artikel baru:

```markdown
---
title: "Judul Artikel Anda"
date: "2024-01-25"
description: "Deskripsi singkat artikel untuk SEO (150-160 karakter)"
---

## Pendahuluan

Perkenalkan topik artikel dan value yang akan diberikan kepada pembaca.

## Bagian Utama

Jelaskan konten utama dengan jelas dan terstruktur.

### Sub-bagian

Gunakan sub-heading untuk memecah konten menjadi bagian yang mudah dibaca.

- Gunakan bullet points untuk list
- Tambahkan contoh code jika relevan
- Sertakan gambar jika membantu penjelasan

## Kesimpulan

Ringkas poin-poin penting dari artikel.
```

---

## ✅ Checklist Artikel Baru

Sebelum publish, pastikan:

- [ ] File memiliki frontmatter lengkap (title, date, description)
- [ ] Nama file menggunakan format slug (huruf kecil, tanda hubung)
- [ ] Judul SEO-friendly dan menarik
- [ ] Deskripsi 150-160 karakter
- [ ] Konten terstruktur dengan heading yang jelas
- [ ] Test di local (`npm run dev`)
- [ ] Artikel muncul di homepage
- [ ] Build sukses (`npm run build`)
- [ ] Deploy ke production

---

## 🔄 Update Artikel yang Sudah Ada

Untuk update artikel yang sudah dipublish:

1. Edit file `.md` di folder `posts/`
2. Ubah konten sesuai kebutuhan
3. (Opsional) Update `date` jika ingin dianggap sebagai artikel baru
4. Build dan deploy ulang

**Catatan:** URL artikel tidak akan berubah selama nama file tidak diubah.

---

## 📊 Best Practices

### Judul Artikel
- ✅ Gunakan kata kunci yang relevan
- ✅ Buat menarik dan informatif
- ✅ Panjang optimal: 50-60 karakter
- ❌ Hindari clickbait berlebihan

### Deskripsi
- ✅ 150-160 karakter (optimal untuk Google)
- ✅ Ringkas tapi informatif
- ✅ Sertakan call-to-action jika relevan
- ❌ Jangan terlalu panjang atau terlalu pendek

### Konten
- ✅ Struktur jelas dengan heading (H2, H3)
- ✅ Paragraf pendek (3-4 kalimat)
- ✅ Gunakan list untuk poin-poin
- ✅ Sertakan contoh praktis
- ✅ Proofread sebelum publish

### Format
- ✅ Konsisten dengan artikel lain
- ✅ Gunakan Markdown dengan benar
- ✅ Test rendering di local
- ✅ Pastikan tidak ada typo

---

## 🆘 Troubleshooting

**Artikel tidak muncul di homepage?**
- Cek nama file (harus `.md`)
- Cek frontmatter (harus valid YAML)
- Pastikan build sukses tanpa error
- Clear cache browser

**Artikel muncul tapi konten kosong?**
- Cek format Markdown
- Pastikan ada konten setelah frontmatter
- Cek apakah ada error di console

**Build error?**
- Cek syntax frontmatter (YAML)
- Pastikan tidak ada karakter khusus yang tidak valid
- Cek log error untuk detail

---

## 📚 Referensi

- [Markdown Guide](https://www.markdownguide.org/)
- [Next.js Static Generation](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)
- [SEO Best Practices](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

