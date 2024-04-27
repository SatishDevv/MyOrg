import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run builder:serve',
        production: 'nx run builder:preview',
      },
      ciWebServerCommand: 'nx run builder:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
