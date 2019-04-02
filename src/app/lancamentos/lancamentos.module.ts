
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CalendarModule } from 'primeng/components/calendar/calendar';
/* import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; */
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { MenubarModule } from 'primeng/components/menubar/menubar';
import { CardModule } from 'primeng/components/card/card';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { SharedModule } from '../shared/shared.module';
import { LancamentosRoutingModule } from './lancamentos-routing';
/* import { BrowserModule } from '@angular/platform-browser'; */

@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    /* BrowserModule, */

    // Modules do primeNG
    /* BrowserAnimationsModule, */
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

    // Shared
    SharedModule,

    // Rotas para o lancamento
    LancamentosRoutingModule
  ],
  exports: [ ]
})
export class LancamentosModule { }
