---
title: "Use kebab-case in Spring Boot @Value placeholders"
excerpt: Use kebab-case in Spring Boot @Value placeholders to avoid configuration-name headaches later.
pubDatetime: 2026-07-13T13:54:21-07:00
timezone: America/Los_Angeles
xUrl: https://x.com/tmsdnl/status/2076772239807242718
---

Use kebab-case in Spring Boot `@Value` placeholders to avoid configuration-name headaches later.

For properties loaded from Config Server:

- `@Value("${demo.item-price}")` matches both `demo.item-price` and `demo.itemPrice`.
- `@Value("${demo.itemPrice}")` matches only `demo.itemPrice`.

This means a camelCase placeholder is coupled to that exact property spelling. If the Config Server property is later standardized to kebab-case, the lookup breaks.

A kebab-case placeholder supports both forms, making it the safer convention for existing configuration and future changes.

Verified this behavior on Spring Boot 2.7, 3.2, 3.3, 3.5, and 4.0.
