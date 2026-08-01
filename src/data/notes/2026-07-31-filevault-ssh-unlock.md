---
title: "Unlocking a FileVault-protected Mac over SSH"
excerpt: Unlocking a FileVault-protected Mac over SSH after reboot may require one successful SSH login while a user is logged in locally.
pubDatetime: 2026-07-31T22:38:07-07:00
timezone: America/Los_Angeles
xUrl: https://x.com/tmsdnl/status/2083427034844549174
---

To be able to unlock a FileVault-protected Mac over SSH after rebooting, first complete one successful SSH login while a user is logged in locally at the Mac.

Apple’s published requirements do not mention this step, but preboot SSH may not work without it.
