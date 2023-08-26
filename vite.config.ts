import { loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),

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
