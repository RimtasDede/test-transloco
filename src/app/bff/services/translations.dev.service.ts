import { Injectable } from '@angular/core';

import translations from '../../../i18n/translations.json';
import { Observable, of } from 'rxjs';

interface TranslationKey {
  default_value: {
    [key: string]: string;
  };
  description: string;
}

@Injectable()
export class TranslationsService {

  getTranslations(lang: string): Observable<{ [key: string]: string }> {
    return of(this.mapTranslations(lang));
  }

  private mapTranslations(lang: string): { [key: string]: string } {
    return Object.entries(translations)
      .reduce((acc, [key, value]: [string, TranslationKey]) => {
        return {
          ...acc,
          [key]: value.default_value[lang]
            || value.default_value['en']
            || Object.entries(value.default_value)[0][1]
        };
      }, {});
  }

}
