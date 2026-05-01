// smart-side Content Collections schema
// Astro 5+ Content Layer API（glob loader）
// 4条件①匿名遵守：author / location 等の個人特定フィールドは持たない

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 記事カテゴリ（URL slug は英小文字統一）
export const CATEGORY_SLUGS = ['ai', 'invest', 'it', 'starter-kit', 'editorial'] as const;
export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    // 基本メタ
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(CATEGORY_SLUGS),

    // 日付
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),

    // 表示用
    readTime: z.string().optional(),       // 例 '7min'
    accent: z.string().optional(),         // tailwind gradient（例 'from-zinc-200 to-zinc-400'）

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
