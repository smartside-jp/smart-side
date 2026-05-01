# smart-side

> 「要らない9割」を捨てる、最低限スターターキット。
> AI・投資・IT、非エンジニアが書くミニマム実装メディア。

🔗 https://smart-side.dev

---

## このリポジトリについて

`smart-side` は、AI / 投資 / IT 領域の「最低限これだけは知っておきたい」を非エンジニア視点でまとめたメディアサイト。
世のテンプレを試して削った先に残ったものだけを記録する、ミニマム実装メディア。

- フレームワーク: [Astro](https://astro.build/) v6
- スタイル: [Tailwind CSS](https://tailwindcss.com/) v4 (CSS-first / `@theme` トークン)
- ホスティング: GitHub Pages + Cloudflare Registrar / DNS
- ドメイン: smart-side.dev

---

## 開発

```sh
# 依存インストール
pnpm install

# 開発サーバー起動（http://localhost:4321）
pnpm dev

# 本番ビルド（dist/ 出力）
pnpm build

# ビルド結果のローカルプレビュー
pnpm preview
```

Node.js v22 以上 / pnpm v10 以上を推奨。

---

## ディレクトリ構成

```
src/
├── content/posts/    Markdown 記事（Content Collections）
├── content.config.ts Collection schema 定義
├── layouts/          ベースレイアウト
├── components/       Header / Footer 等
├── lib/              カテゴリマップ等の共通ロジック
├── pages/            ファイルベースルーティング
│   ├── index.astro          トップ
│   ├── 404.astro            404
│   ├── rss.xml.js           RSSフィード
│   ├── posts/[...slug].astro  記事詳細
│   └── category/[slug].astro  カテゴリ別アーカイブ
└── styles/global.css Tailwind v4 + デザイントークン
```

---

## 記事追加

`src/content/posts/<slug>.md` を作成。frontmatter スキーマは `src/content.config.ts` を参照。

```yaml
---
title: "記事タイトル"
description: "1〜2行の説明"
category: ai           # ai | invest | it | starter-kit | editorial
publishedAt: 2026-05-01
readTime: "7min"
tags:
  - "AI"
  - "Claude"
---

本文 Markdown
```

---

## デプロイ

`main` ブランチに push すると GitHub Actions が自動でビルド → GitHub Pages にデプロイ。
ワークフローは `.github/workflows/deploy.yml` 参照。

---

## ライセンス

掲載されているコード・記事はすべて作者に帰属する。無断転載・無断商用利用を禁ずる。
