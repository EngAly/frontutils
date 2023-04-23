import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabaseModule } from './database/database.module';
import { StringModule } from './string/string.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatabaseModule,
    StringModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
