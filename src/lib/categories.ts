// smart-side カテゴリマッピング
// URL slug（英小文字）⇄ 表示ラベル（日本語）

import type { CategorySlug } from '../content.config';

export interface CategoryMeta {
  slug: CategorySlug;
  label: string;        // 短いラベル（記事カード等で使用）
  fullLabel: string;    // 長いラベル（セクション見出し等で使用）
  description: string;  // カテゴリ説明（カテゴリページ等で使用）
}

export const CATEGORIES: Record<CategorySlug, CategoryMeta> = {
  ai: {
    slug: 'ai',
    label: 'AI',
    fullLabel: 'AI / 人工知能',
    description: 'Claude / ChatGPT / MCP / プロンプト。非エンジニアが業務で使うラインまで削った話。',
  },
  invest: {
    slug: 'invest',
    label: '投資',
    fullLabel: '投資 / お金',
    description: '新NISA / iDeCo / インデックス。世のテンプレを試して残ったものだけ。',
  },
  it: {
    slug: 'it',
    label: 'IT',
    fullLabel: 'IT / 道具',
    description: 'パスワード管理 / 2FA / バックアップ。最低限の道具と運用。',
  },
  'starter-kit': {
    slug: 'starter-kit',
    label: 'STARTER KIT',
    fullLabel: 'スターターキット',
    description: '「要らない9割」を捨てた、最低限のスターターキット完全版。',
  },
  editorial: {
    slug: 'editorial',
    label: 'EDITORIAL',
    fullLabel: '編集後記',
    description: 'メディアの考え方・運用ログ・エッセイ。',
  },
};

export const getCategory = (slug: CategorySlug): CategoryMeta => CATEGORIES[slug];
