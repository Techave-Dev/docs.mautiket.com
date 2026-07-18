---
sidebar_position: 5
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
    "eventBanner": "https://storage.example.com/banners/abc.jpg",
    "eventLocation": "Jakarta Convention Center",
    "eventMapsLink": "https://maps.example.com/...",
    "eventStartAt": "2026-07-20T10:00:00+07:00",
    "eventEndAt": "2026-07-20T18:00:00+07:00",
    "organizerName": "Event Organizer",
    "status": "payment_pending",
    "subtotal": "475000.00",
    "feeTotal": "25000.00",
    "grandTotal": "500000.00",
    "totalAmount": "500000.00",
    "paymentStatus": "unpaid",
    "items": [
      {
        "id": "01KXYZ...",
        "orderId": "01KXYZ...",
        "ticketCategoryId": "01KXYZ...",
        "name": "VIP",
        "quantity": 1,
        "unitPrice": "500000.00",
        "subtotal": "500000.00",
        "createdAt": "2026-07-17T10:00:00Z"
      }
    ],
    "participants": [
      {
        "id": "01KXYZ...",
        "orderId": "01KXYZ...",
        "eventId": "01KXYZ...",
        "ticketCategoryId": "01KXYZ...",
        "userId": "01KXYZ...",
        "ticketNumber": "TKT-001",
        "qrCode": "https://api.example.com/qr/TKT-001",
        "status": "registered",
        "identityNumber": "3201234567890001",
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "+6281234567890",
        "gender": "male",
        "birthDate": "1990-01-15",
        "formData": {},
        "createdAt": "2026-07-17T10:00:00Z"
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
| 404 | Order tidak ditemukan |
| 500 | Server error |
