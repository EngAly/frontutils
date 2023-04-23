import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormatterComponent } from './component/formatter/formatter.component';
import { FormsModule } from '@angular/forms';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { PrettyJsonCustomPipe } from './pipe/prettyjson.pipe';
 


@NgModule({
  declarations: [
    FormatterComponent,

  ],
  exports: [
    FormatterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrettyJsonModule,
  ],
  providers:[
    PrettyJsonCustomPipe
  ]
})
export class StringModule { }
