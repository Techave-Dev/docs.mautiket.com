---
sidebar_position: 1
title: List Events
description: Daftar semua events
---

# List Events

Daftar semua events dengan filter opsional.

## Endpoint

```
GET /events
```

## Authentication

Tidak membutuhkan autentikasi untuk view publik. Membutuhkan autentikasi untuk view organizer.

## Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | int | 1 | Nomor halaman |
| `limit` | int | 20 | Jumlah item per halaman (max 100) |
| `ownerId` | string | - | Filter by owner ID. Gunakan `me` untuk user yang sedang login |
| `scope` | string | - | `managed` (events yang diorganize) atau `all` (semua events, super_admin only) |
| `status` | string | `published` | Filter: `draft`, `published`, `closed`, `archived` |
| `categoryId` | string | - | Filter by category ULID |
| `eventTypeId` | string | - | Filter by event type ULID |
| `search` | string | - | Cari berdasarkan nama atau lokasi |
| `sort` | string | `startAt` | Sort field: `startAt`, `endAt`, `name`, `createdAt`, `isFeatured` |
| `order` | string | `asc` | Sort order: `asc`, `desc` |

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
| 400 | Validasi gagal |
| 500 | Server error |
