import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TranslationsService } from './services/translations.service';

@NgModule({
  providers: [
    provideHttpClient(),
    TranslationsService,
  ],
})
export class BffModule { }
