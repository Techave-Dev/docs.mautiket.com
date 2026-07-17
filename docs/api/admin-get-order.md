---
sidebar_position: 3
title: Admin Get Order Detail
description: Dapatkan detail single order
---

# Admin Get Order Detail

Dapatkan detail lengkap dari single admin-created order.

## Endpoint

```
GET /events/{idOrSlug}/admin/orders/{orderId}
```

## Authentication

Membutuhkan API Key atau JWT token dengan permission `event:read`.

## Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `idOrSlug` | string | Yes | Event ULID atau slug |
| `orderId` | string | Yes | Order ULID |

## Response

### Success (200)

```json
{
  "message": "Order berhasil diambil.",
  "requestId": "abc123",
  "data": {
    "id": "01KXYZ...",
    "buyerUserId": "01KXYZ...",
    "eventId": "01KXYZ...",
    "eventName": "DevSync 2026",
    "eventLocation": "Jakarta Convention Center",
    "status": "payment_pending",
    "paymentStatus": "unpaid",
    "totalAmount": "500000.00",
    "subtotal": "475000.00",
    "feeTotal": "25000.00",
    "grandTotal": "500000.00",
    "customerName": "John Doe",
    "customerEmail": "john@example.com",
    "items": [],
    "participants": [],
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
| 404 | Order tidak ditemukan |
| 500 | Server error |
