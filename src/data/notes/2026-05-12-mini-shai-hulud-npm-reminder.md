---
title: "Mini Shai-Hulud npm reminder"
pubDatetime: 2026-05-12T22:29:16-07:00
timezone: America/Los_Angeles
xUrl: https://x.com/tmsdnl/status/2054434029311865249
---

Mini Shai-Hulud / npm reminder:

You may not have run npm install yourself and still have tooling pulling packages via npx, npm exec, or MCP servers.

Most useful check I found:
$ grep -R -E "verbose title|verbose argv|http fetch|tarball|postinstall|run-script" ~/.npm/\_logs

Mine exposed repeated npm exec @browsermcp/mcp@latest calls.

Worth auditing anything dynamically executing @ latest right now.
