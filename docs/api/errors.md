---
sidebar_position: 9
title: Error Codes
description: Daftar error codes yang mungkin terjadi pada API
---

# Error Codes

## Response Format

```json
{
  "code": "not_found",
  "message": "Resource not found",
  "requestId": "abc123"
}
```

## Common Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `not_found` | 404 | Resource tidak ditemukan |
| `forbidden` | 403 | Tidak memiliki akses |
| `unauthorized` | 401 | Tidak terautentikasi |
| `validation.failed` | 400 | Validasi gagal |
| `internal_error` | 500 | Server error |
| `conflict` | 409 | Data sudah ada |

## Admin Order Specific Errors

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `event.not_found` | 404 | Event tidak ditemukan |
| `order.not_found` | 404 | Order tidak ditemukan |
| `order.not_admin_created` | 422 | Order bukan admin-created |
| `order.not_payable` | 422 | Order tidak bisa dibayar |
| `order.not_cancellable` | 422 | Order tidak bisa dibatalkan |
| `order.zero_amount` | 422 | Amount harus lebih dari 0 |
| `ticket.not_available` | 422 | Tiket tidak tersedia |
| `ticket.quota.exceeded` | 422 | Kuota tiket habis |
| `participant.duplicate` | 409 | NIK sudah terdaftar di event ini |
| `payment.already_pending` | 409 | Pembayaran sedang diproses |
| `payment.gateway_error` | 502 | Gateway payment error |

## Validation Error Format

```json
{
  "code": "validation.failed",
  "message": "Validasi gagal",
  "requestId": "abc123",
  "error": [
    {
      "field": "email",
      "code": "required",
      "message": "Email wajib diisi"
    }
  ]
}
```

## Common Validation Errors

| Field | Code | Description |
|-------|------|-------------|
| `email` | `required` | Email wajib diisi |
| `email` | `email` | Format email tidak valid |
| `name` | `required` | Nama wajib diisi |
| `name` | `min` | Nama minimal 1 karakter |
| `name` | `max` | Nama maksimal 100 karakter |
| `phone` | `required` | Nomor HP wajib diisi |
| `phone` | `e164` | Format nomor HP tidak valid |
| `gender` | `required` | Gender wajib diisi |
| `gender` | `oneof` | Gender harus male atau female |
| `identityNumber` | `required` | NIK wajib diisi |
| `identityNumber` | `len` | NIK harus 16 digit |
| `birthDate` | `required` | Tanggal lahir wajib diisi |
| `eventId` | `required` | Event ID wajib diisi |
| `eventId` | `ulid` | Format Event ID tidak valid |
| `ticketCategoryId` | `required` | Ticket Category ID wajib diisi |
| `ticketCategoryId` | `ulid` | Format Ticket Category ID tidak valid |
