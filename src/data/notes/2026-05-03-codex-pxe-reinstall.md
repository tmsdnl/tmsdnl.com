---
title: "Codex PXE reinstall"
pubDatetime: 2026-05-03T12:57:25-07:00
timezone: America/Los_Angeles
xUrl: https://x.com/tmsdnl/status/2051028627668812267
---

I forgot to let the Codex VM reach my PXE server through the firewall, so the Proxmox reinstall should have failed.

It did not.

Codex used the target host as a jump box, staged the PXE stack, armed one-shot PXE, forced the PXE boot with headless-amt, watched the install over KVM, then flipped boot back to disk and disarmed PXE.

Both scary and fascinating.

Successful /goal run: ~28 minutes, after ~12 hours idle waiting for credentials. Oops.

headless-amt is headless Intel AMT control, now being hardened for OSS release.

![PXE reinstall output from headless-amt](https://pbs.twimg.com/media/HHa26JxasAAkcDZ.jpg)
