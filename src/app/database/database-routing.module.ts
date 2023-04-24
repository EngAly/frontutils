import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DatabaseComponent} from "./component/database/database.component";
import {FormatterComponent} from "./component/formatter/formatter.component";
import {TrimmerComponent} from "./component/trimmer/trimmer.component";

const routes: Routes = [
  {
    path: '', component: DatabaseComponent,
    children: [
      {path: 'formatter', component: FormatterComponent,},
      {path: 'trimmer', component: TrimmerComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule {
}
