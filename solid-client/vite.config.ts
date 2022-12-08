import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  
  server: {
    port: 8070,
    origin: 'http://193.150.100.254:8070',
    cors: false
  },
  build: {
    target: 'esnext',
  },
});
