// smart-side Content Collections schema
// Astro 5+ Content Layer API（glob loader）
// 4条件①匿名遵守：author / location 等の個人特定フィールドは持たない

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 記事カテゴリ（URL slug は英小文字統一）
export const CATEGORY_SLUGS = ['ai', 'invest', 'it', 'starter-kit', 'editorial'] as const;
export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

// 記事レベル（読み手が記事を選びやすくするためのバッジ表示用）
// - beginner: Lv1 入門・行動誘導・話しかけ口調・~2,000字
// - standard: Lv2 詳しい話・柱記事・公式化・5,500-7,500字
// - glossary: Lv1.5 用語解説・1用語1記事・1,500字（将来用）
export const LEVEL_SLUGS = ['beginner', 'standard', 'glossary'] as const;
export type LevelSlug = (typeof LEVEL_SLUGS)[number];

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    // 基本メタ
    title: z.string(),
    description: z.string(),  // SEO・OGP・JSON-LD で必須利用
    category: z.enum(CATEGORY_SLUGS),

    // 日付
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),

    // 表示用
    readTime: z.string().optional(),       // 例 '7min'
    accent: z.string().optional(),         // tailwind gradient（例 'from-zinc-200 to-zinc-400'）
    heroImage: z.string().optional(),      // public からの絶対パス（例 '/images/posts/xxx.png'）。指定があれば accent より優先表示
    level: z.enum(LEVEL_SLUGS).default('standard'),  // 記事レベル（バッジ表示用・読み手が選びやすく）

    // ピックアップ系
    featured: z.boolean().default(false),
    pickedByEditor: z.boolean().default(false),
    popularRank: z.number().int().positive().optional(),

    // 公開制御
    draft: z.boolean().default(false),

    // タグ
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
