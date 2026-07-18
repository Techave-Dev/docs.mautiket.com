---
sidebar_position: 13
title: Get Tickets by Event
description: Daftar ticket categories untuk event
---

# Get Tickets by Event

Dapatkan daftar semua ticket categories untuk event tertentu.

## Endpoint

```
GET /events/:idOrSlug/tickets
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
  "message": "Daftar ticket berhasil diambil.",
  "requestId": "abc123",
  "data": [
    {
      "id": "01KXYZ...",
      "eventId": "01KXYZ...",
      "name": "VIP",
      "description": "VIP Ticket dengan akses eksklusif",
      "type": "paid",
      "quota": 50,
      "sold": 30,
      "saleStartAt": "2026-07-01T00:00:00+07:00",
      "saleEndAt": "2026-07-19T23:59:59+07:00",
      "price": "500000",
      "status": "active",
      "isSoldOut": false,
      "createdAt": "2026-07-17T10:00:00Z",
      "updatedAt": "2026-07-17T10:00:00Z"
    },
    {
      "id": "01KXYZ...",
      "eventId": "01KXYZ...",
      "name": "Regular",
      "description": "Regular Ticket",
      "type": "paid",
      "quota": 100,
      "sold": 100,
      "saleStartAt": "2026-07-01T00:00:00+07:00",
      "saleEndAt": "2026-07-19T23:59:59+07:00",
      "price": "250000",
      "status": "active",
      "isSoldOut": true,
      "createdAt": "2026-07-17T10:00:00Z",
      "updatedAt": "2026-07-17T10:00:00Z"
    }
  ]
}
```

### Error Responses

| Code | Description |
|------|-------------|
| 401 | Tidak terautentikasi |
| 403 | Tidak memiliki akses |
| 404 | Event tidak ditemukan |
| 500 | Server error |
