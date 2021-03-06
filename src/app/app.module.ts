import { LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Meus componentes
import { NavbarComponent } from './navbar/navbar.component';
import { ConfirmationService } from 'primeng/components/common/api';

import { MenubarModule } from 'primeng/components/menubar/menubar';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/components/button/button';
import { CoreModule } from './core/core.module';
import { EventEmitterService } from './shared/utils/event.manager';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
    HttpClientModule,

    // Modules do primeNG
    BrowserAnimationsModule,
    ButtonModule,
    CoreModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },
    ConfirmationService,
    EventEmitterService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
