---
sidebar_position: 4
title: Get Event Detail (Organizer)
description: Detail event untuk organizer
---

# Get Event Detail (Organizer)

Dapatkan detail lengkap dari event termasuk semua ticket categories (active + inactive).

## Endpoint

```
GET /events/:idOrSlug/organizer
```

## Authentication

Membutuhkan API Key atau JWT token dengan permission `event:read`.

## Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `idOrSlug` | string | Yes | Event ULID atau slug |

## Response

### Success (200)

```json
{
  "message": "Event berhasil diambil.",
  "requestId": "abc123",
  "data": {
    "id": "01KXYZ...",
    "ownerId": "01KXYZ...",
    "name": "DevSync 2026",
    "slug": "devsync-2026",
    "description": "Event teknologi terbesar di Indonesia",
    "terms": "Syarat dan ketentuan berlaku",
    "location": "Jakarta Convention Center",
    "mapsLink": "https://maps.example.com/...",
    "startAt": "2026-07-20T10:00:00+07:00",
    "endAt": "2026-07-20T18:00:00+07:00",
    "timezone": "Asia/Jakarta",
    "status": "published",
    "isPublic": true,
    "feeBearer": "buyer",
    "eventTypeId": "01KXYZ...",
    "categoryId": "01KXYZ...",
    "subcategoryId": "01KXYZ...",
    "isFeatured": true,
    "isTransferable": true,
    "transferDeadline": "2026-07-19T23:59:59+07:00",
    "quota": 200,
    "isFinished": false,
    "banner": "https://storage.example.com/banners/abc.jpg",
    "organizer": {
      "id": "01KXYZ...",
      "name": "Event Organizer",
      "avatar": "https://storage.example.com/avatars/abc.jpg"
    },
    "ticketCategories": [
      {
        "id": "01KXYZ...",
        "name": "VIP",
        "description": "VIP Ticket dengan akses eksklusif",
        "type": "paid",
        "quota": 50,
        "sold": 30,
        "price": "500000.00",
        "status": "active",
        "isSoldOut": false,
        "saleStartAt": "2026-07-01T00:00:00+07:00",
        "saleEndAt": "2026-07-19T23:59:59+07:00"
      },
      {
        "id": "01KXYZ...",
        "name": "Regular",
        "description": "Regular Ticket",
        "type": "paid",
        "quota": 100,
        "sold": 100,
        "price": "250000.00",
        "status": "active",
        "isSoldOut": true,
        "saleStartAt": "2026-07-01T00:00:00+07:00",
        "saleEndAt": "2026-07-19T23:59:59+07:00"
      }
    ],
    "createdAt": "2026-07-17T10:00:00Z",
    "updatedAt": "2026-07-17T10:00:00Z"
  }
}
```

### Error Responses

| Code | Description |
|------|-------------|
| 401 | Tidak terautentikasi |
| 403 | Tidak memiliki akses |
| 404 | Event tidak ditemukan |
| 500 | Server error |
