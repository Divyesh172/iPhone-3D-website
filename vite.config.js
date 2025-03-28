import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        chunkSizeWarningLimit: 2000,
        rollupOptions: {
            output: {
                manualChunks: {
                    // Group specific components into separate chunks
                    iphone3dComponents: [
                        './src/components/DisplaySection.jsx',
                        './src/components/Jumbotron.jsx',
                        './src/components/Nav.jsx',
                        './src/components/SoundSection.jsx',
                        './src/components/WebgiViewer.jsx',
                    ],
                    vendor: ['react', 'react-dom'], // Group React libraries into a vendor chunk
                },
            },
        },
    },
    base: '/iphone-3d-website',
});
