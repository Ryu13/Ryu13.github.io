import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CosplayModule } from 'src/cosplay/cosplay.module';
import { AboutModule } from 'src/about/about.module';
import { GamingModule } from 'src/gaming/gaming.module';
import { ContactModule } from 'src/contact/contact.module';
import { NavigationModule } from 'src/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CosplayModule,
    AboutModule,
    GamingModule,
    ContactModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
