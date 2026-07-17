---
sidebar_position: 1
title: Admin Create Order
description: Buat order untuk customer walk-in
---

# Admin Create Order

Buat order untuk customer walk-in.

## Endpoint

```
POST /events/{idOrSlug}/admin/orders
```

## Authentication

Membutuhkan API Key atau JWT token dengan permission `event:update`.

## Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `idOrSlug` | string | Yes | Event ULID atau slug |

## Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `eventId` | string | Yes | Event ULID |
| `ticketCategoryId` | string | Yes | Ticket category ULID |
| `registration.name` | string | Yes | Nama customer (1-100 chars) |
| `registration.email` | string | Yes | Email customer |
| `registration.phone` | string | Yes | Nomor HP (E.164 format) |
| `registration.gender` | string | Yes | `male` atau `female` |
| `registration.birthDate` | string | Yes | Tanggal lahir (YYYY-MM-DD) |
| `registration.identityNumber` | string | Yes | NIK (16 digits) |
| `registration.formData` | object | No | Data tambahan jika ada |

## Response

### Success (201)

```json
{
  "message": "Order berhasil dibuat oleh admin.",
  "requestId": "abc123",
  "data": {
    "id": "01KXYZ...",
    "buyerUserId": "01KXYZ...",
    "eventId": "01KXYZ...",
    "eventName": "DevSync 2026",
    "eventLocation": "Jakarta Convention Center",
    "eventMapsLink": "https://maps.example.com/...",
    "eventStartAt": "2026-07-20T10:00:00+07:00",
    "eventEndAt": "2026-07-20T18:00:00+07:00",
    "organizerName": "Event Organizer",
    "status": "payment_pending",
    "totalAmount": "500000",
    "paymentStatus": "unpaid",
    "participants": [],
    "createdAt": "2026-07-17T10:00:00Z",
    "updatedAt": "2026-07-17T10:00:00Z",
    "createdUserId": "01KXYZ...",
    "isExistingUser": false,
    "generatedPassword": "xK9mN..."
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
| 409 | NIK sudah terdaftar |
| 500 | Server error |
