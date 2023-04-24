import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EnumComponent} from './component/enum/enum.component';
import {FormatterComponent} from './component/formatter/formatter.component';
import {StringComponent} from "./component/string/string.component";


const routes: Routes = [

  {
    path: '', component: StringComponent,
    children: [
      {path: 'enum', component: EnumComponent,},
      {path: 'formatter', component: FormatterComponent,}
    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StringRoutingModule {
}
