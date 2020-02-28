import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AModule } from 'sample-project';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
