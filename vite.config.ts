import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  
  return {
    plugins: [react()],
    
    // Base path for GitHub Pages deployment
    base: isProduction ? '/tdb-investor-relations/' : '/',
    
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
        'components': path.resolve(__dirname, './components'),
        'styles': path.resolve(__dirname, './styles'),
        'assets': path.resolve(__dirname, './assets'),
        'constants': path.resolve(__dirname, './constants')
      }
    },
    
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'terser',
      target: 'es2020',
      
      // Optimize chunks for better loading
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            motion: ['motion/react'],
            ui: ['lucide-react', 'clsx', 'tailwind-merge']
          },
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name?.split('.') || []
            const extType = info[info.length - 1]
            
            if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name || '')) {
              return `assets/images/[name]-[hash][extname]`
            }
            
            if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || '')) {
              return `assets/fonts/[name]-[hash][extname]`
            }
            
            return `assets/[name]-[hash][extname]`
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js'
        }
      },
      
      // Asset optimization
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      
      // Performance optimizations
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info'],
          passes: 2
        },
        mangle: true,
        format: {
          comments: false
        }
      }
    },
    
    // Development server configuration
    server: {
      port: 3000,
      host: true,
      open: true
    },
    
    // Preview server configuration
    preview: {
      port: 4173,
      host: true
    },
    
    // CSS configuration
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        css: {
          charset: false
        }
      }
    },
    
    // Asset processing
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
    
    // Environment variables
    define: {
      __DEV__: !isProduction,
      __PROD__: isProduction
    },
    
    // Performance optimizations
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'motion/react',
        'lucide-react'
      ]
    }
  }
})