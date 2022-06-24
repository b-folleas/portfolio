import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import path from 'path'

// const __filename = fileURLToPath(
//     import.meta.url);
// const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
    base: '/portfolio/',
    plugins: [
        vue(),
        vueI18n({
            compositionOnly: false,
            include: path.resolve(__dirname, './i18n/locales/**')
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src',
                import.meta.url))
        }
    },
    build: {
        chunkSizeWarningLimit: 1600,
    },
})