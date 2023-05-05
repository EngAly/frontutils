import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormatterComponent} from './component/formatter/formatter.component';
import {FormsModule} from '@angular/forms';
import {PrettyJsonModule} from 'angular2-prettyjson';
import {PrettyJsonCustomPipe} from '../utils/pipe/prettyjson.pipe';
import {EnumComponent} from './component/enum/enum.component';
import {LayoutModule} from '../utils/layout/layout.module';
import {StringRoutingModule} from './string-routing.module';
import {StringComponent} from './component/string/string.component';
import {TextCompareComponent} from './component/text-compare/text-compare.component';
import {MonacoEditorModule} from "ngx-monaco-editor";
import { TextStatisticsComponent } from './component/text-statistics/text-statistics.component';


@NgModule({
  declarations: [
    FormatterComponent,
    EnumComponent,
    StringComponent, TextCompareComponent, TextStatisticsComponent,

  ],
  exports: [
    FormatterComponent,
    EnumComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    PrettyJsonModule,
    LayoutModule,
    StringRoutingModule,
    MonacoEditorModule.forRoot()
  ],
  providers:[
    PrettyJsonCustomPipe
  ]
})
export class StringModule { }
