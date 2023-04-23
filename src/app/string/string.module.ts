import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormatterComponent } from './component/formatter/formatter.component';
import { FormsModule } from '@angular/forms';
import { PrettyJsonModule } from 'angular2-prettyjson';
import { PrettyJsonCustomPipe } from './pipe/prettyjson.pipe';
import { EnumComponent } from './component/enum/enum.component';
import { LayoutModule } from '../utils/layout/layout.module';
 


@NgModule({
  declarations: [
    FormatterComponent,
    EnumComponent,

  ],
  exports: [
    FormatterComponent,
    EnumComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    PrettyJsonModule,
    LayoutModule
  ],
  providers:[
    PrettyJsonCustomPipe
  ]
})
export class StringModule { }