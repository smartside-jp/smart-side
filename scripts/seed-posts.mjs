// smart-side: 13本のサンプル記事 Markdown を一括生成する一時シードスクリプト
// 用途：Step 3 Content Collections への投入データ生成（schema は src/content.config.ts）
// 実行：node scripts/seed-posts.mjs
// 4条件①匿名遵守：author / location 等の個人特定フィールドは持たない

import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = join(__dirname, '..', 'src', 'content', 'posts');

if (!existsSync(POSTS_DIR)) mkdirSync(POSTS_DIR, { recursive: true });

const posts = [
  {
    filename: 'nisa-emaxis-slim-only.md',
    frontmatter: {
      title: '新NISA は eMAXIS Slim 1本でいい、と判断するまでに削ったもの',
      description: '「最強のポートフォリオ」を探して半年迷走した非エンジニアが、最終的に 1 本に絞るまでに捨てた選択肢。',
      category: 'invest',
      publishedAt: '2026-04-28',
      readTime: '9min',
      accent: 'from-stone-200 to-stone-400',
      popularRank: 3,
      tags: ['投資', '新NISA', 'eMAXIS Slim'],
    },
    body: `> 本文は執筆中。

## なぜ 1 本にしたか

選択肢を増やすほど、判断コストが上がる。
判断コストが上がるほど、放置できなくなる。
放置できないと、長期投資にならない。

## 削った選択肢

- 個別株
- 高配当ETF
- アクティブファンド
- ロボアド
`,
  },
  {
    filename: '1password-2fa-baseline.md',
    frontmatter: {
      title: 'パスワード管理と2FA の最低ライン、これだけは外せない',
      description: 'セキュリティ記事を読み漁った非エンジニアが、結局これだけは絶対外せないと判断したラインを残しておく。',
      category: 'it',
      publishedAt: '2026-04-25',
      readTime: '6min',
      accent: 'from-slate-200 to-slate-400',
      tags: ['IT', 'セキュリティ', '1Password', '2FA'],
    },
    body: `> 本文は執筆中。

## 最低ライン

- パスワードマネージャ 1 本（記憶せず、生成して保管）
- メイン口座・主要 SaaS には 2FA 必須
- バックアップコードはオフライン保管

## 越えなくていいライン

- ハードウェアキー
- パスワードレス完全移行
- VPN 常用
`,
  },
  {
    filename: 'mcp-non-engineer-intro.md',
    frontmatter: {
      title: 'MCP（Model Context Protocol）を非エンジニアが触る前に読む話',
      description: 'MCP は強力だが、非エンジニアが最初に触るには罠が多い。事前に知っておきたい前提と、最初に触るべき 1 本を残しておく。',
      category: 'ai',
      publishedAt: '2026-04-22',
      readTime: '8min',
      accent: 'from-neutral-200 to-neutral-400',
      tags: ['AI', 'MCP', 'Claude'],
    },
    body: `> 本文は執筆中。

## MCP とは

簡単に言うと、AI に「外の世界」とつながる手をつける標準規格。
GitHub・Notion・Slack・ローカルファイル・カレンダー等を、AI が共通の作法で叩けるようにする。

## 最初に触るべき 1 本

ローカルファイル系（Filesystem 系）。
理由：効果が分かりやすく、副作用が小さく、外部認証が要らない。
`,
  },
  {
    filename: 'ai-prompt-template-fail.md',
    frontmatter: {
      title: '「プロンプトテンプレ100選」を全部試して、結局9割捨てた話',
      description: 'プロンプトテンプレ集を真面目に試した非エンジニアが、最終的に残したのは 10 個未満だった、その内訳。',
      category: 'ai',
      publishedAt: '2026-04-18',
      readTime: '7min',
      accent: 'from-zinc-200 to-zinc-400',
      popularRank: 5,
      tags: ['AI', 'プロンプト', 'ChatGPT', 'Claude'],
    },
    body: `> 本文は執筆中。

## 捨てた理由

- 文脈を含まないテンプレは、貼った瞬間に AI が迷子になる
- 「役割を与える」系は、最近のモデルだとほぼ不要
- 出力フォーマット指定は本当に必要なときだけで足りる

## 残したもの

- 「制約条件」を明示するテンプレ
- 「自分の前提」を一行で渡すテンプレ
- 「不確かなら聞き返す」を明示するテンプレ
`,
  },
  {
    filename: 'backup-3-2-1-rule.md',
    frontmatter: {
      title: 'バックアップは 3-2-1 ルールで足りる、それ以上やらない理由',
      description: 'バックアップ戦略を凝りすぎた非エンジニアが、最終的に 3-2-1 で止めた理由と、その先に進まないと決めた境界線。',
      category: 'it',
      publishedAt: '2026-04-19',
      readTime: '6min',
      accent: 'from-slate-200 to-slate-400',
      popularRank: 4,
      tags: ['IT', 'バックアップ', 'データ保全'],
    },
    body: `> 本文は執筆中。

## 3-2-1 とは

- データのコピーを **3 つ** 持つ
- 異なる **2 種類** のメディアに保管
- うち **1 つ** はオフサイト（別の場所）に置く

## それ以上やらない理由

運用が破綻したら、結局取らなくなる。
完璧より、続くもの。
`,
  },
  {
    filename: 'starter-kit-overview.md',
    frontmatter: {
      title: '「要らない9割」を捨てる、最低限スターターキット完全ガイド',
      description: 'AI・投資・IT の最低限スターターキットを、非エンジニア視点で 1 ページにまとめた読み物。テンプレ集ではなく実装手順書。',
      category: 'starter-kit',
      publishedAt: '2026-04-15',
      readTime: '20min',
      accent: 'from-neutral-800 to-neutral-950',
      featured: true,
      pickedByEditor: true,
      popularRank: 1,
      tags: ['スターターキット', 'AI', '投資', 'IT'],
    },
    body: `> 本文は執筆中。

## このキットの方針

- AI / 投資 / IT、それぞれ「これだけは外せない」を厳選
- すべて非エンジニアが運用できるラインまで削った
- テンプレ集ではなく、削った先に残ったものだけ

## 構成

1. **AI** — Claude Code 最低限セットアップ + プロンプト 5 本
2. **投資** — 新NISA eMAXIS Slim 1 本構成 + 家計の最低運用
3. **IT** — パスワード管理 + 2FA + 3-2-1 バックアップ
`,
  },
  {
    filename: 'why-non-engineer-writes.md',
    frontmatter: {
      title: '非エンジニアが技術ブログを書く、その役割について',
      description: '「分かる人」が書いた記事は「分かる人」にしか届かない。間に立つ人が居るから知識は流れる、という話。',
      category: 'editorial',
      publishedAt: '2026-04-12',
      readTime: '5min',
      accent: 'from-stone-700 to-stone-900',
      pickedByEditor: true,
      tags: ['編集後記', '非エンジニア', 'メディア'],
    },
    body: `> 本文は執筆中。

## なぜ書くか

技術ブログは「分かる人」が書きやすい。
ただ、分かる人が書いた記事は、分かる人にしか届かない。

ここでは、まだ分からない側に立っている人間が、
分からないなりに削って、削って、最低限を組み立てて記録する。

それが、間に立つ人の仕事だと思っている。
`,
  },
  {
    filename: 'minimum-tooling-2026.md',
    frontmatter: {
      title: '2026年版・非エンジニアのための最低限ツール12選',
      description: 'パスワード管理・2FA・バックアップ・メモ・タスク・AI。年次で見直して、削れるものは全部削った最新版。',
      category: 'it',
      publishedAt: '2026-04-10',
      readTime: '10min',
      accent: 'from-zinc-700 to-zinc-900',
      pickedByEditor: true,
      tags: ['IT', 'ツール', '2026'],
    },
    body: `> 本文は執筆中。

## 12選の基準

- 月額 1,000 円以下
- 学習コスト 1 時間以内
- 代替不能（無くなると業務が止まる）

## カテゴリ

1. パスワード管理
2. 2FA
3. バックアップ
4. メモ
5. タスク
6. カレンダー
7. AI（チャット）
8. AI（コード）
9. ファイル共有
10. 決済
11. 画像処理
12. 文章校正
`,
  },
  {
    filename: 'ideco-vs-nisa-priority.md',
    frontmatter: {
      title: 'iDeCo と新NISA の優先順位、所得層で線引きする実務ガイド',
      description: 'iDeCo と新NISA、どちらを先に埋めるか。所得層で線引きすると判断が速い、という話。',
      category: 'invest',
      publishedAt: '2026-04-20',
      readTime: '8min',
      accent: 'from-stone-200 to-stone-400',
      tags: ['投資', 'iDeCo', '新NISA', '税制'],
    },
    body: `> 本文は執筆中。

## 線引きの考え方

- 所得控除の効果が大きい層 → iDeCo 優先
- 流動性を取りたい層 → 新NISA 優先
- 両方埋める層 → 順序より、続けられる金額の設計が先

## 注意点

- 税制改正で線引きラインは毎年動く
- 受け取り時の課税まで含めて損得を見る
`,
  },
  {
    filename: 'investment-tools-strip.md',
    frontmatter: {
      title: '投資情報ツール10個を試した結果、残したのは2つだった',
      description: '投資情報・ポートフォリオ管理・スクリーニング系を 10 個試した結果、最終的に残した 2 つと、捨てた理由を残しておく。',
      category: 'invest',
      publishedAt: '2026-04-15',
      readTime: '7min',
      accent: 'from-stone-200 to-stone-400',
      tags: ['投資', 'ツール', 'スクリーニング'],
    },
    body: `> 本文は執筆中。

## 残した 2 つ

- 証券会社のネイティブ画面（取引と確認はここで完結）
- 自動取得型のポートフォリオビューア(手入力ゼロ)

## 捨てた 8 つ

ニュースアプリ、SNSの投資クラスタ、有料スクリーニング、AI 推奨ツール、ロボアド、…
共通点：「見る回数」が増えるほど、運用が荒れる。
`,
  },
  {
    filename: 'household-budget-minimum.md',
    frontmatter: {
      title: '家計簿アプリは要らない、口座を分けるだけで足りる理由',
      description: '家計簿アプリを 3 年使った非エンジニアが、最終的にアプリを捨てて口座構造で家計を管理することにした、その思考過程。',
      category: 'invest',
      publishedAt: '2026-04-08',
      readTime: '6min',
      accent: 'from-stone-200 to-stone-400',
      tags: ['投資', '家計', '仕組み化'],
    },
    body: `> 本文は執筆中。

## 口座を分けるだけ、の構造

1. **生活費口座** — 給与振込・固定費引き落とし
2. **貯蓄口座** — 自動で月初に移す
3. **投資口座** — 自動で積立に流す
4. **遊び口座** — 残ったぶんだけ使う

これだけで家計簿アプリの 8 割の機能が要らなくなる。
`,
  },
  {
    filename: 'chatgpt-vs-claude-2026.md',
    frontmatter: {
      title: 'ChatGPT と Claude、用途別に2年使った非エンジニアの結論',
      description: '両方に課金して 2 年使った非エンジニアが、用途ごとの使い分けと、結局メインに据えたのはどちらかを残しておく。',
      category: 'ai',
      publishedAt: '2026-04-12',
      readTime: '8min',
      accent: 'from-zinc-200 to-zinc-400',
      tags: ['AI', 'ChatGPT', 'Claude', '比較'],
    },
    body: `> 本文は執筆中。

## 用途別の現状

- **長文の構成・校正** → Claude
- **画像・図表まわり** → ChatGPT
- **コード作業** → Claude（Claude Code 経由）
- **雑談・ブレインストーミング** → どちらでも

## 注意点

モデルは半年で前提が変わる。
「どちらが正解」ではなく「どう切り替えるか」を運用する。
`,
  },
  {
    filename: 'cloud-vs-local-storage.md',
    frontmatter: {
      title: 'クラウドとローカル、保管場所の最低限の使い分け',
      description: '全部クラウドに上げると検索性は上がるが、依存度も上がる。最低限の使い分けラインを残しておく。',
      category: 'it',
      publishedAt: '2026-04-05',
      readTime: '6min',
      accent: 'from-slate-200 to-slate-400',
      tags: ['IT', 'クラウド', 'データ保全'],
    },
    body: `> 本文は執筆中。

## クラウドに置くもの

- 検索したい文書（議事録・メモ・契約書 PDF 等）
- 共有が前提のもの
- 軽い画像

## ローカルに残すもの

- 大量メディア（写真・動画）
- 過去アーカイブ（直近1年使っていないもの）
- 一次情報の原本（クラウドはあくまでコピー）
`,
  },
];

function toYaml(obj) {
  const lines = [];
  for (const [k, v] of Object.entries(obj)) {
    if (Array.isArray(v)) {
      lines.push(`${k}:`);
      // 配列要素は常にダブルクォート（数値・真偽値推論を防ぐ）
      for (const item of v) lines.push(`  - "${String(item).replace(/"/g, '\\"')}"`);
    } else if (typeof v === 'string') {
      if (/^\d{4}-\d{2}-\d{2}$/.test(v)) lines.push(`${k}: ${v}`);
      else lines.push(`${k}: "${v.replace(/"/g, '\\"')}"`);
    } else {
      lines.push(`${k}: ${v}`);
    }
  }
  return lines.join('\n');
}

let created = 0;
for (const post of posts) {
  const filePath = join(POSTS_DIR, post.filename);
  if (existsSync(filePath)) {
    console.log(`SKIP (exists): ${post.filename}`);
    continue;
  }
  const content = `---\n${toYaml(post.frontmatter)}\n---\n\n${post.body}`;
  writeFileSync(filePath, content, 'utf8');
  console.log(`CREATED: ${post.filename}`);
  created++;
}
console.log(`\nDone. created=${created} skipped=${posts.length - created} total=${posts.length}`);
