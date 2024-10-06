import { isDevMode, ModuleWithProviders, NgModule } from '@angular/core';
import { provideTransloco, TranslocoModule, TranslocoOptions } from '@ngneat/transloco';

@NgModule({
  providers: [
  ],
  exports: [
    TranslocoModule,
  ],
})
export class I18nModule {

  static forRoot(options?: TranslocoOptions): ModuleWithProviders<I18nModule> {
    return {
      ngModule: I18nModule,
      providers: [
        provideTransloco({
          config: {
            availableLangs: ['en'],
            defaultLang: 'en',
            reRenderOnLangChange: true,
            prodMode: !isDevMode(),
            ...options?.config
          },
          loader: options?.loader,
        }),
      ],
    };
  }

  static forChild(): ModuleWithProviders<I18nModule> {
    return {
      ngModule: I18nModule,
    };
  }

}
