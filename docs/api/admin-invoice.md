---
sidebar_position: 8
title: Admin Download Invoice
description: Download invoice PDF
---

# Admin Download Invoice

Download invoice PDF untuk admin-created order.

## Endpoint

```
GET /events/{idOrSlug}/admin/orders/{orderId}/invoice
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
  "message": "Invoice berhasil dibuat.",
  "requestId": "abc123",
  "data": {
    "downloadUrl": "https://storage.example.com/invoices/01KXYZ...pdf?X-Goog-Signature=...",
    "expiresIn": 900
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
