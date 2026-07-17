---
sidebar_position: 2
title: List Admin Orders
description: List admin orders dengan filter
---

# List Admin Orders

List admin-created orders untuk sebuah event dengan filter opsional.

## Endpoint

```
GET /events/{idOrSlug}/admin/orders
```

## Authentication

Membutuhkan API Key atau JWT token dengan permission `event:read`.

## Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `idOrSlug` | string | Yes | Event ULID atau slug |

## Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | int | 1 | Nomor halaman |
| `limit` | int | 20 | Jumlah item per halaman (max 100) |
| `status` | string | - | Filter: `completed`, `payment_pending`, `verification_pending`, `cancelled` |
| `paymentStatus` | string | - | Filter: `paid`, `unpaid`, `expired` |
| `search` | string | - | Cari berdasarkan nama atau email customer |
| `sort` | string | `createdAt` | Sort field: `createdAt`, `totalAmount` |
| `order` | string | `desc` | Sort order: `asc`, `desc` |

## Response

### Success (200)

```json
{
  "message": "Daftar order admin berhasil diambil.",
  "requestId": "abc123",
  "data": [
    {
      "id": "01KXYZ...",
      "buyerUserId": "01KXYZ...",
      "eventId": "01KXYZ...",
      "eventName": "DevSync 2026",
      "status": "payment_pending",
      "paymentStatus": "unpaid",
      "totalAmount": "500000",
      "customerName": "John Doe",
      "customerEmail": "john@example.com",
      "ticketCategoryName": "VIP",
      "participants": [],
      "createdAt": "2026-07-17T10:00:00Z",
      "updatedAt": "2026-07-17T10:00:00Z"
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
| 401 | Tidak terautentikasi |
| 403 | Tidak memiliki akses |
| 404 | Event tidak ditemukan |
| 500 | Server error |
