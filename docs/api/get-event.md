---
sidebar_position: 2
title: Get Event Detail
description: Dapatkan detail event
---

# Get Event Detail

Dapatkan detail lengkap dari event berdasarkan ID atau slug.

## Endpoint

```
GET /events/{idOrSlug}
```

## Authentication

Tidak membutuhkan autentikasi untuk event publik.

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
    "isFeatured": true,
    "isTransferable": true,
    "transferDeadline": "2026-07-19T23:59:59+07:00",
    "quota": 200,
    "ticketCategories": [
      {
        "id": "01KXYZ...",
        "name": "VIP",
        "description": "VIP Ticket",
        "type": "paid",
        "quota": 50,
        "sold": 30,
        "price": "500000",
        "status": "active",
        "isSoldOut": false,
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
| 404 | Event tidak ditemukan |
| 500 | Server error |
