import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import { quasar } from "@quasar/vite-plugin";

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        build: {
            outDir: 'public/build',
            manifest: true,
            rollupOptions: {
                input: "resources/js/app.js", // Arquivo de entrada principal
            },
        },
        plugins: [
            laravel({
                input: [
                    "resources/sass/app.scss",
                    "resources/js/app.js",
                    "resources/css/app.css",
                ],
                refresh: true,
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
            tailwindcss(),
            quasar({
                sassVariables: fileURLToPath(
                    new URL(
                        "./resources/sass/quasar-variables.sass",
                        import.meta.url
                    )
                ),
            }),
        ],
        resolve: {
            alias: {
                vue: "vue/dist/vue.esm-bundler.js",
            },
        },
        server: {
            host: "127.0.0.1",
            port: 3000,
            strictPort: true,
            hmr: {
                host: "127.0.0.1",
                clientPort: 3000,
                cors:  {
                    origin: '*', // Permite requisições de qualquer origem (mudar se necessário)
                    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
                    allowedHeaders: ['Content-Type', 'Authorization'],
                    credentials: true
                },
            },
            cors: {
                origin: '*', // Permite requisições de qualquer origem (mudar se necessário)
                methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
                allowedHeaders: ['Content-Type', 'Authorization'],
                credentials: true
            },
        },
        define: {
            __APP_ENV__: env.APP_ENV,
        },
    };
});
