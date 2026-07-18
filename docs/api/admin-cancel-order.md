---
sidebar_position: 8
title: Admin Cancel Order
description: Batalkan admin order
---

# Admin Cancel Order

Batalkan admin-created order. Mengurangi kuota tiket dan mengirim email notifikasi.

## Endpoint

```
POST /events/{idOrSlug}/admin/orders/{orderId}/cancel
```

## Authentication

Membutuhkan API Key atau JWT token dengan permission `event:update`.

## Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `idOrSlug` | string | Yes | Event ULID atau slug |
| `orderId` | string | Yes | Order ULID |

## Request Body (Optional)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `note` | string | No | Catatan pembatalan (max 500 chars) |

## Response

### Success (200)

```json
{
  "message": "Order berhasil dibatalkan.",
  "requestId": "abc123",
  "data": {
    "orderId": "01KXYZ...",
    "status": "cancelled"
  }
}
```

### Error Responses

| Code | Description |
|------|-------------|
| 400 | Validasi gagal |
| 401 | Tidak terautentikasi |
| 403 | Tidak memiliki akses |
| 404 | Order tidak ditemukan |
| 422 | Order tidak bisa dibatalkan |
