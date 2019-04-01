import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ToastyModule
import {ToastyModule} from 'ng2-toasty';

import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfirmDialogModule,

    // ToastyModule
    ToastyModule.forRoot()
  ],
  exports: [
    ConfirmDialogModule,

    // ToastyModule
    ToastyModule
  ]
})
export class CoreModule { }
