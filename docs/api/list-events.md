---
sidebar_position: 1
title: List Events (Organizer)
description: Daftar events milik organizer
---

# List Events (Organizer)

Daftar events milik organizer dengan filter opsional.

## Endpoint

```
GET /events
```

## Authentication

Membutuhkan API Key atau JWT token. Gunakan `ownerId=me` untuk mendapatkan events milik user yang sedang login.

## Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | int | 1 | Nomor halaman |
| `limit` | int | 20 | Jumlah item per halaman (max 100) |
| `ownerId` | string | - | **Wajib**: Gunakan `me` untuk events milik user yang sedang login |
| `scope` | string | - | `managed` (events yang diorganize) atau `all` (semua events, super_admin only) |
| `status` | string | - | Filter: `draft`, `published`, `closed`, `archived` |
| `search` | string | - | Cari berdasarkan nama atau lokasi |
| `sort` | string | `createdAt` | Sort field: `startAt`, `endAt`, `name`, `createdAt` |
| `order` | string | `desc` | Sort order: `asc`, `desc` |

## Response

### Success (200)

```json
{
  "message": "Daftar event berhasil diambil.",
  "requestId": "abc123",
  "data": [
    {
      "id": "01KXYZ...",
      "ownerId": "01KXYZ...",
      "name": "DevSync 2026",
      "slug": "devsync-2026",
      "description": "Event teknologi terbesar",
      "location": "Jakarta Convention Center",
      "startAt": "2026-07-20T10:00:00+07:00",
      "endAt": "2026-07-20T18:00:00+07:00",
      "status": "published",
      "isPublic": true,
      "eventTypeId": "01KXYZ...",
      "categoryId": "01KXYZ...",
      "isFeatured": true,
      "minPrice": "250000",
      "maxPrice": "500000",
      "createdAt": "2026-07-17T10:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

### Error Responses

| Code | Description |
|------|-------------|
| 401 | Tidak terautentikasi |
| 500 | Server error |
