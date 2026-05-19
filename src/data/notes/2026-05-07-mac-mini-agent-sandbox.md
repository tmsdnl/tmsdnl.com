---
title: "Mac Mini agent sandbox notes"
pubDatetime: 2026-05-07T08:36:00-07:00
timezone: America/Los_Angeles
xUrl: https://x.com/tmsdnl/status/2052412389245829509
---

Note to future self and PSA for anyone buying a Mac Mini to sandbox coding agents inside a macOS VM:

- 32GB RAM is tight. A macOS VM for Xcode + simulators realistically needs ~16GB allocated to it, leaving little room for the host and additional Linux VMs/containers for agents.
- 256GB SSD disappears fast between Xcode, simulators, caches, and VM disks (1TB upgrade already on the way)
- Get 10GbE (if your network supports it). Once the Mini becomes a remote VM host, 1GbE screen sharing feels choppy. You cannot upgrade it later.

\*Does not apply if you are yolo-running agents directly on the host.
