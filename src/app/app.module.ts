import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import translationConfig from '../i18n/config.json';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { I18nModule } from './i18n';
import { TranslationsLoader } from './translations-loader';
import { BffModule } from './bff/bff.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BffModule,
    I18nModule.forRoot({
      config: {
        availableLangs: translationConfig.languages,
      },
      loader: TranslationsLoader,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
