import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Meus componentes
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';

// Componentes do primeNG
import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { CardModule } from 'primeng/components/card/card';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { MenubarModule } from 'primeng/components/menubar/menubar';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

// Vendors
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PessoaPesquisaComponent,
    LancamentoCadastroComponent,
    PessoaCadastroComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    // Modules do primeNG
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    MenubarModule,
    CardModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,

    // Vendors
    CurrencyMaskModule,
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
