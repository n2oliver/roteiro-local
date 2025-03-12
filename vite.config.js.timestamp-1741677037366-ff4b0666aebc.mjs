// vite.config.js
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "file:///var/www/html/node_modules/vite/dist/node/index.js";
import laravel from "file:///var/www/html/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///var/www/html/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import tailwindcss from "file:///var/www/html/node_modules/@tailwindcss/vite/dist/index.mjs";
import { quasar } from "file:///var/www/html/node_modules/@quasar/vite-plugin/src/index.js";
var __vite_injected_original_import_meta_url = "file:///var/www/html/vite.config.js";
var vite_config_default = defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    build: {
      outDir: "public/build",
      manifest: true,
      rollupOptions: {
        input: "resources/js/app.js"
        // Arquivo de entrada principal
      }
    },
    plugins: [
      laravel({
        input: [
          "resources/sass/app.scss",
          "resources/js/app.js",
          "resources/css/app.css"
        ],
        refresh: true
      }),
      vue({
        template: {
          transformAssetUrls: {
            base: null,
            includeAbsolute: false
          }
        }
      }),
      tailwindcss(),
      quasar({
        sassVariables: fileURLToPath(
          new URL(
            "./resources/sass/quasar-variables.sass",
            __vite_injected_original_import_meta_url
          )
        )
      })
    ],
    resolve: {
      alias: {
        vue: "vue/dist/vue.esm-bundler.js"
      }
    },
    server: {
      host: "127.0.0.1",
      port: 3e3,
      strictPort: true,
      hmr: {
        host: "127.0.0.1",
        clientPort: 3e3,
        cors: {
          origin: "*",
          // Permite requisições de qualquer origem (mudar se necessário)
          methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
          allowedHeaders: ["Content-Type", "Authorization"],
          credentials: true
        }
      },
      cors: {
        origin: "*",
        // Permite requisições de qualquer origem (mudar se necessário)
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true
      }
    },
    define: {
      "__APP_ENV__": JSON.stringify(process.env.APP_ENV || "development")
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvdmFyL3d3dy9odG1sXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvdmFyL3d3dy9odG1sL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy92YXIvd3d3L2h0bWwvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGxhcmF2ZWwgZnJvbSBcImxhcmF2ZWwtdml0ZS1wbHVnaW5cIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJAdGFpbHdpbmRjc3Mvdml0ZVwiO1xuaW1wb3J0IHsgcXVhc2FyIH0gZnJvbSBcIkBxdWFzYXIvdml0ZS1wbHVnaW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xuICAgIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZDoge1xuICAgICAgICAgICAgb3V0RGlyOiAncHVibGljL2J1aWxkJyxcbiAgICAgICAgICAgIG1hbmlmZXN0OiB0cnVlLFxuICAgICAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBcInJlc291cmNlcy9qcy9hcHAuanNcIiwgLy8gQXJxdWl2byBkZSBlbnRyYWRhIHByaW5jaXBhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgbGFyYXZlbCh7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJyZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzc1wiLFxuICAgICAgICAgICAgICAgICAgICBcInJlc291cmNlcy9qcy9hcHAuanNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZXNvdXJjZXMvY3NzL2FwcC5jc3NcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHZ1ZSh7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtQXNzZXRVcmxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZUFic29sdXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0YWlsd2luZGNzcygpLFxuICAgICAgICAgICAgcXVhc2FyKHtcbiAgICAgICAgICAgICAgICBzYXNzVmFyaWFibGVzOiBmaWxlVVJMVG9QYXRoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVVJMKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIuL3Jlc291cmNlcy9zYXNzL3F1YXNhci12YXJpYWJsZXMuc2Fzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0Lm1ldGEudXJsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAgICAgdnVlOiBcInZ1ZS9kaXN0L3Z1ZS5lc20tYnVuZGxlci5qc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmVyOiB7XG4gICAgICAgICAgICBob3N0OiBcIjEyNy4wLjAuMVwiLFxuICAgICAgICAgICAgcG9ydDogMzAwMCxcbiAgICAgICAgICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gICAgICAgICAgICBobXI6IHtcbiAgICAgICAgICAgICAgICBob3N0OiBcIjEyNy4wLjAuMVwiLFxuICAgICAgICAgICAgICAgIGNsaWVudFBvcnQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgY29yczogIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiAnKicsIC8vIFBlcm1pdGUgcmVxdWlzaVx1MDBFN1x1MDBGNWVzIGRlIHF1YWxxdWVyIG9yaWdlbSAobXVkYXIgc2UgbmVjZXNzXHUwMEUxcmlvKVxuICAgICAgICAgICAgICAgICAgICBtZXRob2RzOiBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdERUxFVEUnLCAnT1BUSU9OUyddLFxuICAgICAgICAgICAgICAgICAgICBhbGxvd2VkSGVhZGVyczogWydDb250ZW50LVR5cGUnLCAnQXV0aG9yaXphdGlvbiddLFxuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29yczoge1xuICAgICAgICAgICAgICAgIG9yaWdpbjogJyonLCAvLyBQZXJtaXRlIHJlcXVpc2lcdTAwRTdcdTAwRjVlcyBkZSBxdWFscXVlciBvcmlnZW0gKG11ZGFyIHNlIG5lY2Vzc1x1MDBFMXJpbylcbiAgICAgICAgICAgICAgICBtZXRob2RzOiBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdERUxFVEUnLCAnT1BUSU9OUyddLFxuICAgICAgICAgICAgICAgIGFsbG93ZWRIZWFkZXJzOiBbJ0NvbnRlbnQtVHlwZScsICdBdXRob3JpemF0aW9uJ10sXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmluZToge1xuICAgICAgICAgICAgJ19fQVBQX0VOVl9fJzogSlNPTi5zdHJpbmdpZnkocHJvY2Vzcy5lbnYuQVBQX0VOViB8fCAnZGV2ZWxvcG1lbnQnKVxuICAgICAgICB9LFxuICAgIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxxQkFBcUI7QUFDdlAsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLGNBQWM7QUFMMkcsSUFBTSwyQ0FBMkM7QUFPbkwsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxTQUFTLEtBQUssTUFBTTtBQUMvQyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFFM0MsU0FBTztBQUFBLElBQ0gsT0FBTztBQUFBLE1BQ0gsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsZUFBZTtBQUFBLFFBQ1gsT0FBTztBQUFBO0FBQUEsTUFDWDtBQUFBLElBQ0o7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNKLE9BQU87QUFBQSxVQUNIO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNKO0FBQUEsUUFDQSxTQUFTO0FBQUEsTUFDYixDQUFDO0FBQUEsTUFDRCxJQUFJO0FBQUEsUUFDQSxVQUFVO0FBQUEsVUFDTixvQkFBb0I7QUFBQSxZQUNoQixNQUFNO0FBQUEsWUFDTixpQkFBaUI7QUFBQSxVQUNyQjtBQUFBLFFBQ0o7QUFBQSxNQUNKLENBQUM7QUFBQSxNQUNELFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQSxRQUNILGVBQWU7QUFBQSxVQUNYLElBQUk7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQUEsTUFDSixDQUFDO0FBQUEsSUFDTDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ0wsT0FBTztBQUFBLFFBQ0gsS0FBSztBQUFBLE1BQ1Q7QUFBQSxJQUNKO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixLQUFLO0FBQUEsUUFDRCxNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixNQUFPO0FBQUEsVUFDSCxRQUFRO0FBQUE7QUFBQSxVQUNSLFNBQVMsQ0FBQyxPQUFPLFFBQVEsT0FBTyxVQUFVLFNBQVM7QUFBQSxVQUNuRCxnQkFBZ0IsQ0FBQyxnQkFBZ0IsZUFBZTtBQUFBLFVBQ2hELGFBQWE7QUFBQSxRQUNqQjtBQUFBLE1BQ0o7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNGLFFBQVE7QUFBQTtBQUFBLFFBQ1IsU0FBUyxDQUFDLE9BQU8sUUFBUSxPQUFPLFVBQVUsU0FBUztBQUFBLFFBQ25ELGdCQUFnQixDQUFDLGdCQUFnQixlQUFlO0FBQUEsUUFDaEQsYUFBYTtBQUFBLE1BQ2pCO0FBQUEsSUFDSjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ0osZUFBZSxLQUFLLFVBQVUsUUFBUSxJQUFJLFdBQVcsYUFBYTtBQUFBLElBQ3RFO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
