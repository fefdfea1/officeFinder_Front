import { loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import mkcert from "vite-plugin-mkcert";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      mkcert(),

      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            naverClientId: env.VITE_VITE_KAKO_MAP_API,
          },
        },
      }),
    ],
  };
};
