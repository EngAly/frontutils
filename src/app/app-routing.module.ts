import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [

  {path: 'string', loadChildren: () => import(`./string/string.module`).then(m => m.StringModule)},
  {path: 'database', loadChildren: () => import(`./database/database.module`).then(m => m.DatabaseModule)},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
