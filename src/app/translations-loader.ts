import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Translation, TranslocoLoader } from '@ngneat/transloco';

import { TranslationsService } from './bff/services/translations.service';

@Injectable()
export class TranslationsLoader implements TranslocoLoader {

  private translations = inject(TranslationsService);

  getTranslation(lang: string): Observable<Translation> {
    return this.translations.getTranslations(lang);
  }

}
