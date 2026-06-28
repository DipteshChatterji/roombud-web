import { cp, mkdir, rename } from 'node:fs/promises';
import { join } from 'node:path';

const dist = 'dist';
const nested = join(dist, 'terms-of-use');

await mkdir(nested, { recursive: true });

for (const entry of ['index.html', 'assets', 'favicon.svg', 'icons.svg']) {
  try {
    await rename(join(dist, entry), join(nested, entry));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

// Wrangler SPA fallback serves /index.html from the assets root for client routes.
await cp(join(nested, 'index.html'), join(dist, 'index.html'));
