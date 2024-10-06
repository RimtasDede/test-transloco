import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './components/page/page.component';
import { I18nModule } from '../i18n';


@NgModule({
  declarations: [
    PageComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    I18nModule.forChild(),
  ]
})
export class PageModule { }
