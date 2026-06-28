import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { BASE_PATH } from './src/config/basePath';

export default defineConfig({
  plugins: [react()],
  base: `${BASE_PATH}/`,
});
