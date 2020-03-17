import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { SubnavModule } from './subnav/subnav.module';

import { SentryErrorHandler } from 'src/app/shared-components/sentry.service';
import { ApiModule } from '../../projects/api-generated-client/src/api.module';
import { DefaultService } from '../../projects/api-generated-client/src/api/default.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    SubnavModule,
    BreadcrumbModule,
    HttpClientModule,
    ApiModule,
  ],
  providers: [
    DefaultService,
    { provide: ErrorHandler, useClass: SentryErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
