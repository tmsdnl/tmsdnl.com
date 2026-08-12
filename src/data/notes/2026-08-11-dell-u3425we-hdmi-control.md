---
title: "Dell U3425WE monitor control works over inactive HDMI"
excerpt: Dell U3425WE monitor control works over inactive HDMI.
pubDatetime: 2026-08-11T20:02:56-07:00
timezone: America/Los_Angeles
xUrl: https://x.com/tmsdnl/status/2087410183953682650
---

The HDMI input does not need to be active for DDC/CI control.

For example, a Raspberry Pi connected over HDMI can send commands even when its input isn't currently displayed. It can change anything the monitor exposes through DDC/CI, from switching the USB KVM and configuring PBP/PIP to adjusting brightness and volume.

![Raspberry Pi connected over HDMI beneath the Dell U3425WE monitor](/images/dell-u3425we-hdmi-control/raspberry-pi-hdmi-control.webp)

HDMI effectively becomes a limited out-of-band control path, opening up some interesting automation possibilities.
