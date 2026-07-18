---
sidebar_position: 6
title: Admin Checkout Order
description: Initiate payment untuk admin order
---

# Admin Checkout Order

Initiate DOKU payment checkout untuk admin-created order. Mengembalikan redirect URL untuk pembayaran customer.

## Endpoint

```
POST /events/{idOrSlug}/admin/orders/{orderId}/checkout
```

## Authentication

Membutuhkan API Key atau JWT token dengan permission `event:update`.

## Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `idOrSlug` | string | Yes | Event ULID atau slug |
| `orderId` | string | Yes | Order ULID |

## Response

### Success (200)

```json
{
  "message": "Checkout berhasil dibuat.",
  "requestId": "abc123",
  "data": {
    "redirectUrl": "https://checkout.doku.com/...",
    "tokenId": "...",
    "expiredDate": "20260717210000",
    "totalAmount": "500000"
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
| 422 | Order tidak bisa dibayar |
| 502 | Gateway payment error |
