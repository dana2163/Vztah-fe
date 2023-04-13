import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Namiesto importovania environment môžete nastaviť produkčný režim priamo
const isProduction = false; // Nastavte na 'true' pre produkčný režim

if (isProduction) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
