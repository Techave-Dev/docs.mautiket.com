---
sidebar_position: 2
title: Authentication
description: Cara menggunakan API Key untuk mengakses endpoint admin
---

# Authentication

## API Key

Semua endpoint admin menggunakan **API Key** authentication. API Key harus dikirimkan di header `X-API-Key`.

## Mendapatkan API Key

### 1. Login ke Akun Organizer

```bash
POST /auth/login
Content-Type: application/json

{
  "email": "your-email@example.com",
  "password": "your-password"
}
```

Response:
```json
{
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "tokenType": "Bearer",
    "expiresIn": 900,
    "user": {
      "id": "01KXYZ...",
      "email": "your-email@example.com",
      "name": "Event Organizer"
    }
  }
}
```

### 2. Buat API Key

```bash
POST /me/api-keys
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "name": "admin-automation"
}
```

Response:
```json
{
  "data": {
    "id": "01KXYZ...",
    "name": "admin-automation",
    "key": "mk_abcdefgh12345678ijklmnopqrst...",
    "createdAt": "2026-07-17T10:00:00Z"
  }
}
```

:::warning
API Key hanya ditampilkan sekali saat pembuatan. Simpan API Key di tempat yang aman.
:::

## Menggunakan API Key

Tambahkan header `X-API-Key` pada setiap request:

```bash
curl -X GET https://api.mautiket.com/events/:id/admin/orders \
  -H "X-API-Key: mk_..."
```

## Contoh Lengkap

```bash
# 1. Login
TOKEN=$(curl -s -X POST https://api.mautiket.com/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"your-email@example.com","password":"your-password"}' \
  | jq -r '.data.accessToken')

# 2. Buat API Key
API_KEY=$(curl -s -X POST https://api.mautiket.com/me/api-keys \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"admin-automation"}' \
  | jq -r '.data.key')

# 3. Gunakan API Key untuk admin order
curl -s https://api.mautiket.com/events/:id/admin/orders \
  -H "X-API-Key: $API_KEY"
```

## Error Handling

| Code | Description |
|------|-------------|
| 401 | API Key tidak valid atau expired |
| 403 | Tidak memiliki akses ke event |

## Limitations

- API Key hanya bisa dibuat menggunakan JWT session (tidak bisa via API Key lain)
- API Key tidak memiliki scope per-endpoint (mendapat semua permission user)
- API Key tidak memiliki session ID
