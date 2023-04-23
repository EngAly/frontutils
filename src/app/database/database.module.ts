import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatterComponent } from './component/formatter/formatter.component';
import { FormsModule } from '@angular/forms';
import { TrimmerComponent } from './component/trimmer/trimmer.component';


@NgModule({
  declarations: [
    FormatterComponent,
    TrimmerComponent
  ],
  imports: [
    // CommonModule,
    FormsModule,
  ],
  exports: [
    FormatterComponent,
    TrimmerComponent
  ]
})
export class DatabaseModule { }
