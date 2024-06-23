import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Certifique-se de que este é o diretório de saída correto
  },
  server: {
    historyApiFallback: true, // Para garantir que as rotas funcionem corretamente no desenvolvimento
  }
});
