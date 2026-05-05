// smart-side 記事レベルマッピング
// 読み手が記事を選びやすくするためのレベル分類
// 詳細は memory: feedback_smart_side_writing_style.md / project_smart_side.md

import type { LevelSlug } from '../content.config';

export interface LevelMeta {
  slug: LevelSlug;
  label: string;          // バッジ短いラベル（記事カード等）
  fullLabel: string;      // 長いラベル（記事ページ等）
  description: string;    // レベル説明（hover tooltip 等で使用）
  badgeClass: string;     // Tailwind クラス（背景・文字・枠）
}

export const LEVELS: Record<LevelSlug, LevelMeta> = {
  beginner: {
    slug: 'beginner',
    label: '入門',
    fullLabel: 'Lv1 入門',
    description: 'これから始める人向け・話しかけ口調・短め',
    badgeClass: 'bg-orange-50 text-orange-900 border-orange-300',
  },
  standard: {
    slug: 'standard',
    label: '詳しい話',
    fullLabel: 'Lv2 詳しい話',
    description: '判断軸が欲しい人向け・公式化された処方軸',
    badgeClass: 'bg-slate-50 text-slate-700 border-slate-300',
  },
  glossary: {
    slug: 'glossary',
    label: '用語',
    fullLabel: 'Lv1.5 用語解説',
    description: '1用語1記事・薄く深く',
    badgeClass: 'bg-stone-50 text-stone-600 border-stone-300',
  },
};

export const getLevel = (slug: LevelSlug): LevelMeta => LEVELS[slug];
