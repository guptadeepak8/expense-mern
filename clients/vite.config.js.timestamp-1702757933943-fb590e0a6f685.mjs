// vite.config.js
import { defineConfig } from "file:///D:/deepak/practise/expense-mern/clients/node_modules/vite/dist/node/index.js";
import react from "file:///D:/deepak/practise/expense-mern/clients/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///D:/deepak/practise/expense-mern/clients/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Expense app",
        short_name: "Expense app",
        description: "I am a Expense app",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "favicon"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "favicon"
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "apple touch icon"
          },
          {
            src: "/maskable_icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
        theme_color: "#171717",
        background_color: "#f0e7db",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait"
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxkZWVwYWtcXFxccHJhY3Rpc2VcXFxcZXhwZW5zZS1tZXJuXFxcXGNsaWVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGRlZXBha1xcXFxwcmFjdGlzZVxcXFxleHBlbnNlLW1lcm5cXFxcY2xpZW50c1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovZGVlcGFrL3ByYWN0aXNlL2V4cGVuc2UtbWVybi9jbGllbnRzL3ZpdGUuY29uZmlnLmpzXCI7Ly8gdml0ZS5jb25maWcuanNcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHtWaXRlUFdBfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZToncHJvbXB0JyxcbiAgICAgIGluY2x1ZGVBc3Nlc3RzOlsnZmF2aWNvbi5pY28nLCBcImFwcGxlLXRvdWMtaWNvbi5wbmdcIiwgXCJtYXNrZWQtaWNvbi5zdmdcIl0sXG4gICAgICBtYW5pZmVzdDp7XG4gICAgICAgIG5hbWU6XCJFeHBlbnNlIGFwcFwiLFxuICAgICAgICBzaG9ydF9uYW1lOlwiRXhwZW5zZSBhcHBcIixcbiAgICAgICAgZGVzY3JpcHRpb246XCJJIGFtIGEgRXhwZW5zZSBhcHBcIixcbiAgICAgICAgaWNvbnM6W3tcbiAgICAgICAgICBzcmM6ICcvYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgIHNpemVzOicxOTJ4MTkyJyxcbiAgICAgICAgICB0eXBlOidpbWFnZS9wbmcnLFxuICAgICAgICAgIHB1cnBvc2U6J2Zhdmljb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6Jy9hbmRyb2lkLWNocm9tZS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgc2l6ZXM6JzUxMng1MTInLFxuICAgICAgICAgIHR5cGU6J2ltYWdlL3BuZycsXG4gICAgICAgICAgcHVycG9zZTonZmF2aWNvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJy9hcHBsZS10b3VjaC1pY29uLnBuZycsXG4gICAgICAgICAgc2l6ZXM6JzE4MHgxODAnLFxuICAgICAgICAgIHR5cGU6J2ltYWdlL3BuZycsXG4gICAgICAgICAgcHVycG9zZTonYXBwbGUgdG91Y2ggaWNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICcvbWFza2FibGVfaWNvbi5wbmcnLFxuICAgICAgICAgIHNpemVzOic1MTJ4NTEyJyxcbiAgICAgICAgICB0eXBlOidpbWFnZS9wbmcnLFxuICAgICAgICAgIHB1cnBvc2U6J2FueSBtYXNrYWJsZScsXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB0aGVtZV9jb2xvcjonIzE3MTcxNycsXG4gICAgICBiYWNrZ3JvdW5kX2NvbG9yOicjZjBlN2RiJyxcbiAgICAgIGRpc3BsYXk6XCJzdGFuZGFsb25lXCIsXG4gICAgICBzY29wZTonLycsXG4gICAgICBzdGFydF91cmw6XCIvXCIsXG4gICAgICBvcmllbnRhdGlvbjoncG9ydHJhaXQnXG4gICAgICB9XG4gICAgfSlcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixTQUFRLGVBQWM7QUFFdEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sY0FBYTtBQUFBLE1BQ2IsZ0JBQWUsQ0FBQyxlQUFlLHVCQUF1QixpQkFBaUI7QUFBQSxNQUN2RSxVQUFTO0FBQUEsUUFDUCxNQUFLO0FBQUEsUUFDTCxZQUFXO0FBQUEsUUFDWCxhQUFZO0FBQUEsUUFDWixPQUFNO0FBQUEsVUFBQztBQUFBLFlBQ0wsS0FBSztBQUFBLFlBQ0wsT0FBTTtBQUFBLFlBQ04sTUFBSztBQUFBLFlBQ0wsU0FBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFJO0FBQUEsWUFDSixPQUFNO0FBQUEsWUFDTixNQUFLO0FBQUEsWUFDTCxTQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU07QUFBQSxZQUNOLE1BQUs7QUFBQSxZQUNMLFNBQVE7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTTtBQUFBLFlBQ04sTUFBSztBQUFBLFlBQ0wsU0FBUTtBQUFBLFVBQ1Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxhQUFZO0FBQUEsUUFDWixrQkFBaUI7QUFBQSxRQUNqQixTQUFRO0FBQUEsUUFDUixPQUFNO0FBQUEsUUFDTixXQUFVO0FBQUEsUUFDVixhQUFZO0FBQUEsTUFDWjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
