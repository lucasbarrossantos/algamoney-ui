import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaPesquisaComponent } from './pessoas/pessoa-pesquisa/pessoa-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Meus modules
import { PessoasModule } from './pessoas/pessoas.module';

// Meus componentes
import { NavbarComponent } from './navbar/navbar.component';
import { ConfirmationService } from 'primeng/components/common/api';

import { LancamentosModule } from './lancamentos/lancamentos.module';
import { MenubarModule } from 'primeng/components/menubar/menubar';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/components/button/button';
import { CoreModule } from './core/core.module';
import { EventEmitterService } from './shared/utils/event.manager';
import { Routes, RouterModule } from '@angular/router';
import { lancamentoRoute } from './lancamentos/lancamento.router';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LancamentosModule,
    PessoasModule,
    MenubarModule,
    HttpClientModule,
    RouterModule.forRoot(lancamentoRoute),

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
