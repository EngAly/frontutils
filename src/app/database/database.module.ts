import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatterComponent } from './component/formatter/formatter.component';
import { FormsModule } from '@angular/forms';
import { TrimmerComponent } from './component/trimmer/trimmer.component';
import { DatabaseComponent } from './component/database/database.component';
import { LayoutModule } from '../utils/layout/layout.module';
import {DatabaseRoutingModule} from "./database-routing.module";


@NgModule({
  declarations: [
    FormatterComponent,
    TrimmerComponent,
    DatabaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DatabaseRoutingModule,
    LayoutModule,
  ],
  exports: [
    FormatterComponent,
    TrimmerComponent
  ]
})
export class DatabaseModule { }
