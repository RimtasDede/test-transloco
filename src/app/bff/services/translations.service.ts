import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TranslationsService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getTranslations(lang: string) {
    return this.httpClient.get('/api/translations/' + lang);
  }

}
