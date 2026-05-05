// OGP デフォルト画像（SVG → PNG）変換スクリプト
// 実行: node scripts/build-og.mjs
// 入力: public/og-default.svg
// 出力: public/og-default.png（1200x630・OGP 標準サイズ）

import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '..');

const svgPath = join(root, 'public', 'og-default.svg');
const pngPath = join(root, 'public', 'og-default.png');

const svgBuf = readFileSync(svgPath);

await sharp(svgBuf, { density: 144 })
  .resize(1200, 630)
  .png({ quality: 95, compressionLevel: 8 })
  .toFile(pngPath);

console.log(`✅ Generated: ${pngPath}`);
