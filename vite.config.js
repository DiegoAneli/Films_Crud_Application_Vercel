import { defineConfig } from 'vite'

//Configurazione base per progetto HTML + JS + CSS
export default defineConfig({
  root: '.',               //indica che index.html è nella root
  base: './',              //usa percorsi relativi (importante per Vercel e GitHub Pages)
  build: {
    outDir: 'dist',        //cartella di output
    emptyOutDir: true,     //pulisce la cartella dist ad ogni build
    rollupOptions: {
      input: './index.html' //punto di ingresso principale
    }
  },
  server: {
    port: 5173,            //porta locale per dev server
    open: true,            //apre il browser in automatico
  }
})
