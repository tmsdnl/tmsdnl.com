---
title: "Be careful letting coding agents run tccutil"
pubDatetime: 2026-05-08T20:00:48-07:00
timezone: America/Los_Angeles
xUrl: https://x.com/tmsdnl/status/2052947112544108797
---

PSA for macOS dev/testing: be very careful letting coding agents run tccutil, especially with broad permissions.

Codex ran tccutil reset Accessibility instead of resetting permissions for a specific app. That wiped Accessibility grants across all apps, broke input/control permissions, triggered WindowServer/HID weirdness, and made keyboard/clicks appear partially dead until sleep/wake, followed by a full reboot.

Thankfully this happened inside a macOS VM and not on my host machine.
