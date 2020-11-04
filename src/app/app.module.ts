import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountPipe } from './pipes/count.pipe';
import { MomentPipe } from './pipes/moment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MomentPipe,
    CountPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
