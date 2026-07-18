---
sidebar_position: 10
title: Status Codes
description: Daftar status codes untuk order, payment, dan participant
---

# Status Codes

## Order Status

| Status | Description |
|--------|-------------|
| `pending` | Order dibuat, menunggu verifikasi |
| `payment_pending` | Menunggu pembayaran |
| `verification_pending` | Menunggu verifikasi OTP |
| `completed` | Order selesai |
| `cancelled` | Order dibatalkan |

### Transisi Status

```mermaid
stateDiagram-v2
    [*] --> pending
    pending --> payment_pending: Tiket berbayar
    pending --> completed: Tiket gratis
    pending --> verification_pending: Guest checkout
    verification_pending --> payment_pending: OTP verified
    verification_pending --> completed: Tiket gratis
    payment_pending --> completed: Pembayaran berhasil
    payment_pending --> cancelled: Dibatalkan
    completed --> [*]
    cancelled --> [*]
```

## Payment Status

| Status | Description |
|--------|-------------|
| `unpaid` | Belum dibayar |
| `paid` | Sudah dibayar |

## Participant Status

| Status | Description |
|--------|-------------|
| `registered` | Terdaftar |
| `checked_in` | Sudah check-in |
| `transferred` | Sudah ditransfer ke orang lain |
| `cancelled` | Dibatalkan |
| `expired` | Kedaluwarsa |

### Transisi Status

```mermaid
stateDiagram-v2
    [*] --> registered
    registered --> checked_in: Check-in di venue
    registered --> transferred: Transfer tiket
    registered --> cancelled: Dibatalkan
    registered --> expired: Kedaluwarsa
    checked_in --> [*]
    transferred --> [*]
    cancelled --> [*]
    expired --> [*]
```

## Gender

| Value | Description |
|-------|-------------|
| `male` | Laki-laki |
| `female` | Perempuan |
