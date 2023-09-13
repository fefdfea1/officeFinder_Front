import { loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
<<<<<<< HEAD
import mkcert from "vite-plugin-mkcert";
=======
>>>>>>> feature/vercel-fix
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
<<<<<<< HEAD
      mkcert(),

=======
>>>>>>> feature/vercel-fix
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            naverClientId: env.VITE_VITE_KAKO_MAP_API,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        "sockjs-client": "sockjs-client/dist/sockjs.min.js",
      },
    },
  };
};
