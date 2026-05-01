---
title: "MCP（Model Context Protocol）を非エンジニアが触る前に読む話"
description: "MCP は強力だが、非エンジニアが最初に触るには罠が多い。事前に知っておきたい前提と、最初に触るべき 1 本を残しておく。"
category: "ai"
publishedAt: 2026-04-22
readTime: "8min"
accent: "from-neutral-200 to-neutral-400"
tags:
  - AI
  - MCP
  - Claude
---

> 本文は執筆中。

## MCP とは

簡単に言うと、AI に「外の世界」とつながる手をつける標準規格。
GitHub・Notion・Slack・ローカルファイル・カレンダー等を、AI が共通の作法で叩けるようにする。

## 最初に触るべき 1 本

ローカルファイル系（Filesystem 系）。
理由：効果が分かりやすく、副作用が小さく、外部認証が要らない。
