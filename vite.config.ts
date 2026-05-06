import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    server: {
        watch: {
            usePolling: true, // fix for docker. Use polling to watch for file changes (Bind Mount)
        },
        host: true, // fix for docker. 'true' or '0.0.0.0' exposes the project on the local network.
        port: 3000,
    },
});
