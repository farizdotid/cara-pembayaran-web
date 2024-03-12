---
title: Banks
description: Get all Bank List
---

Currently only a few banks are available:
- BCA
- BNI
- BRI
- MANDIRI
- CIMB

## Get All Bank List
### URL API
  ```http
  https://cara-pembayaran.vercel.app/banks
  ```
### Response Json
  ```json
  {
    "status": true,
    "message": "successfully retrieved data",
    "data": [
      {
        "code": "BCA",
        "bankName": "Bank BCA"
      },
      {
        "code": "BNI",
        "bankName": "Bank BNI"
      },
      ...
    ]
  }
  ```