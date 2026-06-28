import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const contentDir = join(repoRoot, 'content');

const backendRoot = resolve(repoRoot, '..', 'Roombud_Backend_mobile-main');
const sources = [
  {
    from: join(backendRoot, 'Doc', 'PRIVACY_POLICY.md'),
    to: join(contentDir, 'PRIVACY_POLICY.md'),
  },
  {
    from: join(backendRoot, 'src', 'main', 'resources', 'legal'),
    to: contentDir,
    isDirectory: true,
  },
];

mkdirSync(contentDir, { recursive: true });

for (const source of sources) {
  if (!existsSync(source.from)) {
    console.warn(`[sync-legal] Skipping missing source: ${source.from}`);
    continue;
  }

  if (source.isDirectory) {
    cpSync(source.from, source.to, { recursive: true });
    console.log(`[sync-legal] Copied directory ${source.from}`);
  } else {
    cpSync(source.from, source.to);
    console.log(`[sync-legal] Copied ${source.from}`);
  }
}

console.log('[sync-legal] Done.');
