import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
/* import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; */
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { CardModule } from 'primeng/components/card/card';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PessoasRoutingModule } from './pessoas-routing';

@NgModule({
  declarations: [
    PessoaCadastroComponent,
    PessoaPesquisaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    // Modules do primeNG
    /* BrowserAnimationsModule, */
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CardModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    PessoasRoutingModule,

    // Shared
    SharedModule
  ],
  exports: [ ]
})
export class PessoasModule { }
