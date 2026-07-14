---
title: "A link can be up without passing traffic"
excerpt: Physically reconnecting a 10GbE SFP+ link restored traffic even though UniFi showed the link as up.
pubDatetime: 2026-07-14T14:33:38-07:00
timezone: America/Los_Angeles
xUrl: https://x.com/tmsdnl/status/2077144143529496904
---

After a couple of hours debugging why my Proxmox LXCs had no outbound Internet, I found that they were sending DHCPDISCOVER packets but never receiving a DHCPOFFER.

Software resets didn't help. Neither did rolling the UniFi switch back to older firmware.

What finally fixed it was physically disconnecting and reconnecting the 10GbE SFP+ link, even though UniFi showed it as up the entire time.

I believe this is the second time I've seen this behavior.
