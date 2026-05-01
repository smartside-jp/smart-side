---
title: "Claude Code を非エンジニアが使い倒す、最低限のセットアップ"
description: "ターミナル恐怖症のままでも、Claude Code を業務に組み込める最低限のセットアップを残しておく。"
category: ai
publishedAt: 2026-04-30
readTime: "7min"
accent: "from-zinc-200 to-zinc-400"
popularRank: 2
tags:
  - AI
  - Claude
  - 非エンジニア
---

> 本文は執筆中。記事の骨子・参考リンク・スクリーンショットは別途追加予定。

## はじめに

Claude Code は強力だが、非エンジニアが触ると最初の30分で挫折しやすい。
ここでは「最低限これだけ動かせれば仕事に使える」というラインまで削ったセットアップ手順を残しておく。

## 削ったもの

- VS Code 拡張群
- 細かいキーバインドカスタマイズ
- 高度な MCP サーバー群

## 残したもの

- インストールと初期認証
- プロジェクト直下の `CLAUDE.md`
- `.claude/settings.local.json`
- 1 つだけの MCP（必要最低限）
