import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTextareaComponent } from './generic-textarea/generic-textarea.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [GenericTextareaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    GenericTextareaComponent
  ]
})
export class LayoutModule { }
