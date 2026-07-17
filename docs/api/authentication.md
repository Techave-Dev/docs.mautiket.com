---
sidebar_position: 2
title: Authentication
description: Cara menggunakan API Key untuk mengakses endpoint admin
---

# Authentication

## API Key

Semua endpoint admin menggunakan **API Key** authentication. API Key harus dikirimkan di header `X-API-Key`.

## Mendapatkan API Key

API Key dapat dibuat melalui **Dashboard MauTiket**:

1. Login ke Dashboard MauTiket
2. Buka menu **Settings** > **API Keys**
3. Klik **Create API Key**
4. Berikan nama untuk API Key (misal: `admin-automation`)
5. Klik **Create**
6. **Simpan API Key** - hanya ditampilkan sekali saat pembuatan

:::warning
API Key hanya ditampilkan sekali saat pembuatan. Simpan API Key di tempat yang aman.
:::

## Menggunakan API Key

Tambahkan header `X-API-Key` pada setiap request:

```bash
curl -X GET https://api.mautiket.com/events/:id/admin/orders \
  -H "X-API-Key: mk_..."
```

## Contoh Penggunaan

```bash
# Gunakan API Key untuk admin order
API_KEY="mk_abcdefgh12345678ijklmnopqrst..."

curl -s https://api.mautiket.com/events/:id/admin/orders \
  -H "X-API-Key: $API_KEY"
```

## Error Handling

| Code | Description |
|------|-------------|
| 401 | API Key tidak valid atau expired |
| 403 | Tidak memiliki akses ke event |

## Limitations

- API Key dibuat melalui Dashboard MauTiket
- API Key tidak memiliki scope per-endpoint (mendapat semua permission user)
- API Key tidak memiliki session ID
