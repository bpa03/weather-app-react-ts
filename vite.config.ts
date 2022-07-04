import { defineConfig, Alias } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

const Paths: Alias[] = [];

const AppPath: Alias = {
  find: '@',
  replacement: path.resolve(__dirname, './src'),
};

const AssetsPath = {
  find: 'assets',
  replacement: path.resolve(__dirname, './assets'),
}

Paths.push(AppPath, AssetsPath);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: 'APP_',
  resolve: {
    alias: Paths
  }
});
